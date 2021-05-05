import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskList, TasklistService } from '../shared/tasklist.service';

@Component({
  selector: 'app-task-viewer',
  templateUrl: './task-viewer.component.html',
  styleUrls: ['./task-viewer.component.scss']
})
export class TaskViewerComponent implements OnInit {

  id: number = null;
  tasks: Array<Task> = null;
  tasklist: TaskList = {
    id: "",
    Title: "",
    DateCreated: null,
    DateModified: null,
    Description: ""
  }


  constructor(private route: ActivatedRoute, public tasklistService: TasklistService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params["id"] 
      this.fetchTaskListData();
      this.fetchTasks()
    });
  }

  onDelete(event){
    this.tasklistService.deleteTask(event)
    .subscribe(()=>{
      // this.TaskLists.
      for (let i = 0; i < this.tasks.length; i++) {
        const element = this.tasks[i];
        if (element.id == event){
          this.tasks.splice(i, 1);
          return;
        }
      };
    });
  }

  onSubmit(post){
    this.tasklistService.createTask(this.id, post.value.Description).subscribe((res)=>{      
      this.tasks.push(<Task>res);
    })
  }

  fetchTaskListData(){
    return this.tasklistService.getDataOfATaskList(this.id).subscribe((res: TaskList)=>{
      this.tasklist = res
    })
  }

  fetchTasks(){
    return this.tasklistService.getTasksOfaList(this.id).subscribe((res: {})=>{
      this.tasks = <Array<Task>> res;      
    });
  }
}
