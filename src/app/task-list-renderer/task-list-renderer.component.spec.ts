import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListRendererComponent } from './task-list-renderer.component';

describe('TaskListRendererComponent', () => {
  let component: TaskListRendererComponent;
  let fixture: ComponentFixture<TaskListRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
