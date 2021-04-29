import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Task, TasklistService } from '../shared/tasklist.service';

@Component({
  selector: 'app-task-renderer',
  templateUrl: './task-renderer.component.html',
  styleUrls: ['./task-renderer.component.scss']
})
export class TaskRendererComponent implements OnInit {

  @Input() task: Task;
  @Input() inModification: boolean;
  @Input() index: number;
  @Output() deleteEvent = new EventEmitter<number>();
  newDescription: string = "";

  constructor(public tasklistService: TasklistService) {
  }

  onDelete() {
    this.deleteEvent.emit(this.task.id);
  }

  onDescriptionModified(text: string){
    this.newDescription = text;
    console.log(text);
  }

  SetResetTask(){
    this.tasklistService.setResetTask(this.task.id).subscribe((res)=>{
      this.task.IsDone = res;
    });
  }

  saveModification(){
    if(this.newDescription == ""){
      return 
    }
    this.tasklistService.updateTask(this.task.id, this.newDescription)
    .subscribe((res)=>{
      this.task.Description = this.newDescription;
      this.newDescription = "";
      this.inModification = false;
    })
  }

  close(){
    this.newDescription = "";
    this.inModification = false
  }

  modifyTask(){
    this.inModification = true;
  }

  ngOnInit(): void {
  }

}
