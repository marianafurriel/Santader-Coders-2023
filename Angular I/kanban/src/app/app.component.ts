import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  id = 0;
  taskEditar: Task | null = null;
  taskLog: Task[] = [];
  listTask: Task[] = [];
  selectedTask: Task | null = null;
  todoTasks: Task[] = [];
  trabalhandoTasks: Task[] = [];
  //   {
  //     color: 'bg-primary',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'trabalhando',
  //     title: 'title06',
  //   },
  //   {
  //     color: 'bg-primary',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'trabalhando',
  //     title: 'title07',
  //   },
  //   {
  //     color: 'bg-primary',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'trabalhando',
  //     title: 'title08',
  //   },
  //   {
  //     color: 'bg-primary',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'trabalhando',
  //     title: 'title09',
  //   },
  //   {
  //     color: 'bg-primary',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'trabalhando',
  //     title: 'title10',
  //   },
  // ];
  finalizadasTasks: Task[] = [
    // {
    //   color: 'bg-primary',
    //   date: new Date(),
    //   description: 'description01',
    //   status: 'finalizado',
    //   title: 'title13',
    // },
    // {
    //   color: 'bg-primary',
    //   date: new Date(),
    //   description: 'description01',
    //   status: 'finalizado',
    //   title: 'title14',
    // },
    // {
    //   color: 'bg-primary',
    //   date: new Date(),
    //   description: 'description01',
    //   status: 'finalizado',
    //   title: 'title15',
    // },
    // {
    //   color: 'bg-primary',
    //   date: new Date(),
    //   description: 'description01',
    //   status: 'finalizado',
    //   title: 'title16',
    // },
    // {
    //   color: 'bg-primary',
    //   date: new Date(),
    //   description: 'description01',
    //   status: 'finalizado',
    //   title: 'title17',
    // },
  ];

  onAddTask(task: Task) {
    task.id = this.id;
    console.log(task);
    this.id++;
    this.listTask.push(task);
    // if (task.status === 'toDo') {
    //   this.todoTasks.push(task);
    //   return;
    // } else if (task.status === 'trabalhando') {
    //   this.trabalhandoTasks.push(task);
    //   return;
    // }
    // this.finalizadasTasks.push(task);
    return;
  }

  onEditTask(task: Task) {
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
  }

  editarTask(task: Task) {
    this.taskEditar = task;
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }
}
