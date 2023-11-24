import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
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
  taskEditar: TaskType | null = null;
  taskLog: TaskType[] = [];
  listTask: TaskType[] = [];
  selectedTask: TaskType | null = null;

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
          console.log('atualizou a');
        },
      });
  }
  onAddTask(task: TaskType) {
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

  onEditTask(task: TaskType) {
    console.log('ONEDIT');
    this.taskEditar = task;
    this.selectedTask = task;
    this._taskService
      .updateTask(task)
      .pipe(take(1))
      .subscribe({
        next: (result: any) => {
          this.atualizarLista();
          this.taskEditar = null;
        },
        error: () => {
          console.log('deu erro :/');
        },
      });
  }

  handleTask(task: TaskType) {
    this.taskLog.push(task);
    this.selectedTask = task;
  }

  editarTask(task: TaskType) {
    this.taskEditar = task;
  }

  deletarTask(task: TaskType) {
    if (confirm('Deletar task?')) {
      this._taskService
        .deleteTask(task)
        .pipe(take(1))
        .subscribe({
          next: (result: any) => {
            this.atualizarLista();
            this.selectedTask = null;
          },
        });
    }
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }
}
