import { Component, OnInit } from '@angular/core';
import { TaskList, TasklistService } from '../shared/tasklist.service';

@Component({
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

  ngOnInit(): void {    
    this.fetchTaskLists();
  }
}
