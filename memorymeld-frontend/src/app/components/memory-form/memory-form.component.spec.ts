import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryFormComponent } from './memory-form.component';

describe('MemoryFormComponent', () => {
  let component: MemoryFormComponent;
  let fixture: ComponentFixture<MemoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
