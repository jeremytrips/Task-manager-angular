import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../shared/tasklist.service';

@Component({
  selector: 'app-task-renderer',
  templateUrl: './task-renderer.component.html',
  styleUrls: ['./task-renderer.component.scss']
})
export class TaskRendererComponent implements OnInit {

  @Input() task: Task;
  @Input() index: number;

  constructor() {
   
   }

  ngOnInit(): void {
  }

}
