import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Task, TasklistService } from '../shared/tasklist.service';

@Component({
  selector: 'app-task-renderer',
  templateUrl: './task-renderer.component.html',
  styleUrls: ['./task-renderer.component.scss']
})
export class TaskRendererComponent implements OnInit {

  @Input() task: Task;
  @Input() index: number;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(public tasklistService: TasklistService) {
  }

  onDelete() {
    this.deleteEvent.emit(this.task.id);
  }

  ngOnInit(): void {
  }

}
