import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditableTaskComponent } from './home/editable-task/editable-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskComponent } from './home/task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewTaskComponent } from './home/task/view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditableTaskComponent,
    TaskComponent,
    LoginComponent,
    ViewTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
