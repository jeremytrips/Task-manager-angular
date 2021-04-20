import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskList, TasklistService } from '../shared/tasklist.service';

@Component({
  selector: 'app-task-list-renderer',
  templateUrl: './task-list-renderer.component.html',
  styleUrls: ['./task-list-renderer.component.scss']
})
export class TaskListRendererComponent implements OnInit {
  
  @Input() tasklist: TaskList;
  @Input() index: number;


  constructor(public tasklistService: TasklistService, private router: Router, private route: ActivatedRoute) {
    
  }

  @HostListener("click") onClick(){
    // this.router.navigateByUrl("/task")
    this.router.navigate([`../task`]);
  }

  ngOnInit(): void {
  }

}
