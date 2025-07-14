import { Component } from '@angular/core';
import { MemoryService } from '../../services/memory.service';
@Component({
  selector: 'app-memory-form',
  templateUrl: './memory-form.component.html',
  styleUrl: './memory-form.component.scss'
})
export class MemoryFormComponent {
memoryContent = '';
  memoryType = 'note';

  constructor(private memoryService: MemoryService) {}

  submitMemory() {
  console.log('Submitting...');

  this.memoryService.saveMemory({
    content: this.memoryContent,
    type: this.memoryType
  }).subscribe({
    next: (res) => {
      console.log('✅ Memory saved:', res);
      alert('Memory saved successfully! ✅');
      this.memoryContent = ''; // Clear textarea
      this.memoryType = 'note'; // Reset type
    },
    error: (err) => {
      console.error('❌ Error saving memory:', err);
      alert('Something went wrong 😔');
    }
  });
}

}
