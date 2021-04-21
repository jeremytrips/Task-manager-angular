import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListViewerComponent } from './task-list-viewer/task-list-viewer.component';
import { TaskViewerComponent } from './task-viewer/task-viewer.component';

const routes: Routes = [
  {path: '', component: TaskListViewerComponent},
  {path: 'journal/:id', component: TaskViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
