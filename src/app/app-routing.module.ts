import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListViewerComponent } from './task-list-viewer/task-list-viewer.component';

const routes: Routes = [
  {path: '', component: TaskListViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
