const express = require('express');
const router = express.Router();
const db = require('../db');
const { OpenAI } = require('openai'); // ✅ Correct for v4+
const authenticateToken = require('../middleware/authMiddleware');


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
router.get('/', authenticateToken, async (req, res) => {
  const user_id = req.user.userId;

  try {
    const [rows] = await db.execute(
      'SELECT id, content, type, tags, created_at FROM memories WHERE user_id = ? ORDER BY created_at DESC',
      [user_id]
    );
    res.json(rows);
  } catch (err) {
    console.error('❌ Error fetching memories:', err);
    res.status(500).json({ error: 'Failed to fetch memories' });
  }
});
router.post('/', authenticateToken, async (req, res) => {
  const { content, type = 'note' } = req.body;
  const user_id = req.user.userId; // ✅ this comes from the token

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Tag this memory with categories or keywords: "${content}"`,
        },
      ],
    });

    const tags = completion.choices[0].message.content;

    await db.execute(
      'INSERT INTO memories (user_id, content, type, tags) VALUES (?, ?, ?, ?)',
      [user_id, content, type, JSON.stringify(tags)]
    );

    res.status(201).json({ message: 'Memory saved successfully', tags });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error saving memory' });
  }
});

module.exports = router;
