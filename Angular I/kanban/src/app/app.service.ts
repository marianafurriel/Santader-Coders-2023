import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskType } from 'src/types/taskType';
import { API_TASKS } from 'src/constants/api';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: HttpClient) {}

  public getTasks(): Observable<TaskType[]> {
    return this._http.get<TaskType[]>(API_TASKS);
  }
  public postTask(task: TaskType) {
    const body = { ...task };
    console.log(body);
    return this._http.post<TaskType>(API_TASKS, body);
  }
  public updateTask(task: TaskType) {
    const { title, description, date, status, tags, valor, color } = {
      ...task,
    };
    const body = {
      title: task.title,
      description: task.description,
      date:  task.date,
      status:  task.status,
      tags:  [...task.tags],
      valor:  task.valor,
      color:  task.color,
    };
    console.log('dentro do service', task);
    return this._http.put<TaskType>(`${API_TASKS}/${task._id}`, body);
  }

  public deleteTask(task: TaskType) {
    return this._http.delete<TaskType>(`${API_TASKS}/${task._id}`);
  }
}
