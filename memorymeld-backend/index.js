const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

const app=express();
app.use(cors());
app.use(bodyParser.json());

const memoryRoutes = require('./routes/memory.js');
app.use('/api/memory', memoryRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`sever is running on http://localhost:${PORT}`);
})