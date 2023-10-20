import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-coluna-quadro',
  templateUrl: './coluna-quadro.component.html',
  styleUrls: ['./coluna-quadro.component.scss'],
})
export class ColunaQuadroComponent {
  @Input() status = '';
  @Input() tasks: Task[] = [];
  tasksFiltradas: Task[] = [];

  ngOnInit() {
    this.handleFiltro(this.status);
    console.log(this.tasksFiltradas);
  }

  handleFiltro(filtro: string) {
    if (filtro === 'all') {
      this.tasksFiltradas = this.tasks;
      return;
    }

    this.tasksFiltradas = this.tasks.filter((item) => {
      if (item.status === filtro) {
        return item;
      }
      return;
    });
  }
}
