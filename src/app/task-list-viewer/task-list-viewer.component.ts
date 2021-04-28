import { Component, OnInit } from '@angular/core';
import { TaskList, TasklistService } from '../shared/tasklist.service';

@Component({
  // template: '<app-task-list-renderer (deleteEvent)="onDelete($event)"></app-task-list-renderer>',
  selector: 'app-task-list-viewer',
  templateUrl: './task-list-viewer.component.html',
  styleUrls: ['./task-list-viewer.component.scss']
})
export class TaskListViewerComponent implements OnInit {
  
  TaskLists: Array<TaskList> = [];

  constructor(public tasklistService: TasklistService) { 
  }
  
  onSubmit(post){
    this.tasklistService.createTaskList(post.value)
    .subscribe((res: TaskList)=>{    
      this.TaskLists.push(res);
    })
  }

  fetchTaskLists(){
    return this.tasklistService.getTaskLists().subscribe((res: {})=>{
      this.TaskLists = <Array<TaskList>> res;
    });
  }

  onDelete(event){
    // console.log(event);
    this.tasklistService.deleteTaskList(event)
    .subscribe(()=>{
      // this.TaskLists.
      for (let i = 0; i < this.TaskLists.length; i++) {
        const element = this.TaskLists[i];
        if (element.id == event){
          this.TaskLists.splice(i, 1);
          return;
        }
      };
    });
  }

  ngOnInit(): void {    
    this.fetchTaskLists();
  }
}
