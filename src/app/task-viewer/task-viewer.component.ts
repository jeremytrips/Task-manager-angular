import { Component, OnInit } from '@angular/core';
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
    id: "29",
    Title: "Car",
    DateCreated: new Date("2021-03-06T13:28:44+00:00"),
    DateModified: new Date("2021-03-09T12:00:29+00:00"),
    Description: "Restoration of a mgb gt 1979"
  };

  constructor(private route: ActivatedRoute, public tasklistService: TasklistService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params["id"]      
      this.fetchTasks()
    });
  }

  fetchTasks(){
    return this.tasklistService.getTasksOfaList(this.id).subscribe((res: {})=>{
      console.log(res);
      this.tasks = <Array<Task>> res;      
    });
  }
}
