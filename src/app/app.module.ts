import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListViewerComponent } from './task-list-viewer/task-list-viewer.component';
import { TaskListRendererComponent } from './task-list-renderer/task-list-renderer.component';
import { TaskViewerComponent } from './task-viewer/task-viewer.component';
import { TaskRendererComponent } from './task-renderer/task-renderer.component';
import { HeaderComponent } from './header/header.component';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListViewerComponent,
    TaskListRendererComponent,
    TaskViewerComponent,
    TaskRendererComponent,
    HeaderComponent,
    QueryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
