import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  taskEditar!: Task;
  taskLog: Task[] = [];
  listTask: Task[] = [
    {
      color: 'bg-primary-subtle',
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title01',
    },
    {
      color: 'bg-secondary-subtle',
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title02',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title03',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title04',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title05',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title06',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title07',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title08',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title09',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title10',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title11',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title12',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title13',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title14',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title15',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title16',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title17',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title18',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title19',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title20',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title21',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title22',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title23',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'trabalhando',
      title: 'title24',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title25',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title26',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title27',
    },
    {
      color: 'bg-primary',
      date: new Date(),
      description: 'description01',
      status: 'finalizado',
      title: 'title28',
    },
  ];
  // listTask: Array<IListTask> = [];
  selectedTask: Task | null = null;
  // listTask: Task[] = [];
  todoTasks: Task[] = [
    {
      color: 'bg-primary-subtle',
      date: new Date(),
      description: 'description01',
      status: 'toDo',
      title: 'title01',
    },
  ];
  // [
  //   {
  //     color: 'bg-primary-subtle',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'toDo',
  //     title: 'title01',
  //   },
  //   {
  //     color: 'bg-secondary-subtle',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'toDo',
  //     title: 'title02',
  //   },
  //   {
  //     color: 'bg-primary',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'toDo',
  //     title: 'title03',
  //   },
  //   {
  //     color: 'bg-primary',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'toDo',
  //     title: 'title04',
  //   },
  //   {
  //     color: 'bg-primary',
  //     date: new Date(),
  //     description: 'description01',
  //     status: 'toDo',
  //     title: 'title05',
  //   },
  // ];
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
    this.listTask.push(task);
    if (task.status === 'toDo') {
      this.todoTasks.push(task);
      return;
    } else if (task.status === 'trabalhando') {
      this.trabalhandoTasks.push(task);
      return;
    }
    this.finalizadasTasks.push(task);
    return;
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
