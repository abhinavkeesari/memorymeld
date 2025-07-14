import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../../services/memory.service';

@Component({
  selector: 'app-memory-list',
  templateUrl: './memory-list.component.html',
  styleUrls: ['./memory-list.component.scss']
})
export class MemoryListComponent implements OnInit {
  memories: any[] = [];

  constructor(private memoryService: MemoryService) {}

  ngOnInit() {
  this.memoryService.getAllMemories().subscribe({
    next: (data) => {
      console.log('🧠 Received:', data); // <- Check this appears in Console
      this.memories = data;
    },
    error: (err) => {
      console.error('❌ Error fetching memories:', err);
    }
  });
}

}
