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
  
  // // todo fix the error on put method
  // @HostListener("click") onClick(){
  //   this.tasklistService.setResetTask(this.task.id)
  //   .subscribe((res)=>{
  //     console.log("ok");
      
  //   });
  // }

  onDelete() {
    // this.deleteEvent.emit(this.tasklist.id);
    console.log("hello");
    this.deleteEvent.emit(this.task.id);
    
  }

  ngOnInit(): void {
  }

}
