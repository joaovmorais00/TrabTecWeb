import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:5000/';
  private baseCards = this.baseUrl + 'cards/';

  constructor(private http: HttpClient) {}

  tasksChanged = new Subject();

  setToken() {
    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
  }

  login(user: User) {
    return this.http.post<string>(`${this.baseUrl}login`, { ...user });
  }

  getTasks() {
    const headers = this.setToken();
    return this.http.get<Task[]>(this.baseCards, { headers: headers });
  }

  createTask(login: string, senha: string) {
    const headers = this.setToken();
    return this.http.post<Task>(
      this.baseCards,
      { titulo: login, conteudo: senha, lista: 'To Do' },
      {
        headers: headers,
      }
    );
  }

  deleteTask(id: string) {
    const headers = this.setToken();
    return this.http.delete<Task>(`${this.baseCards}${id}`, {
      headers: headers,
    });
  }

  editTask(task: Task) {
    const headers = this.setToken();
    return this.http.put<Task>(
      `${this.baseCards}${task.id}`,
      { ...task },
      {
        headers: headers,
      }
    );
  }
}
