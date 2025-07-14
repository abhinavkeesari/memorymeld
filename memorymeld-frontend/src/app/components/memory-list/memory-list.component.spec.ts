import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryListComponent } from './memory-list.component';

describe('MemoryListComponent', () => {
  let component: MemoryListComponent;
  let fixture: ComponentFixture<MemoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
