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
}
