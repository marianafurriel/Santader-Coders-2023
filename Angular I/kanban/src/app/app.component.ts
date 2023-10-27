import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task.model';

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

  ngOnInit() {
    for (let i = 0; i < 15; i++) {}
  }
  onAddTask(task: Task) {
    task.id = this.id;
    this.id++;
    this.listTask.push(task);
    console.log(this.listTask);
    return;
  }

  onEditTask(task: Task | any) {
    console.log(task);
    console.log(task.id);
    this.selectedTask = task;
    for (let i = 0; i < this.listTask.length; i++) {
      if (this.listTask[i].id === task.id) {
        this.listTask = this.listTask
          .slice(0, i)
          .concat([task])
          .concat(this.listTask.slice(i + 1));
        console.log(this.listTask);
        this.listTask[i] = task;
        console.log(this.listTask);
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
