import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Task } from 'src/models/task.model';
import { AppService } from './app.service';
import { TaskType } from 'src/types/taskType';
// import { AppService } from '/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  id = 0;
  taskEditar: Task | null = null;
  taskLog: Task[] = [];
  listTask: Task[] = [];
  selectedTask: Task | null = null;

  constructor(private _taskService: AppService) {}

  ngOnInit() {
    this.atualizarLista();
  }
  public atualizarLista(): void {
    this._taskService
      .getTasks()
      .pipe(take(1))
      .subscribe({
        next: (result: TaskType[]) => {
          this.listTask = result;
        },
      });
  }
  onAddTask(task: Task) {
    task.id = this.id;
    this.id++;
    //this.listTask.push(task);
    this._taskService
      .postTask(task)
      .pipe(take(1))
      .subscribe({
        next: (result: any) => {},
      });
    this.atualizarLista();
    return;
  }

  onEditTask(task: Task | any) {
    this.taskEditar = task;
    this.selectedTask = task;
    for (let i = 0; i < this.listTask.length; i++) {
      if (this.listTask[i].id === task.id) {
        this.listTask[i] = task;
        break;
      }
    }
    for (let i = 0; i < this.taskLog.length; i++) {
      if (this.taskLog[i].id === task.id) {
        this.taskLog[i] = task;
      }
    }
    this.taskEditar = null;
  }

  handleTask(task: Task) {
    this.taskLog.push(task);
    this.selectedTask = task;
    console.log(task);
  }

  editarTask(task: Task) {
    this.taskEditar = task;
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }
}
