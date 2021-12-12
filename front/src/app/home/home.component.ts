import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../models/task.model';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sections: Section[] = [
    new Section('New'),
    new Section('To Do'),
    new Section('Doing'),
    new Section('Done'),
  ];

  toDoTasks!: Task[];
  doingTasks!: Task[];
  doneTasks!: Task[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTasksFromServer();
    this.dataService.tasksChanged.subscribe(() => {
      this.getTasksFromServer();
    });
  }

  getTasksFromServer() {
    console.log('entrou');
    this.dataService.getTasks().subscribe((data) => {
      for (let section of this.sections) {
        if (section.name !== 'New') {
          section.tasks = data.filter((task) => task.lista === section.name);
        }
      }
      console.log(this.sections);
    });
  }
}
