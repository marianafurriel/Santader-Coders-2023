import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { TaskType } from 'src/types/taskType';

@Component({
  selector: 'app-coluna-quadro',
  templateUrl: './coluna-quadro.component.html',
  styleUrls: ['./coluna-quadro.component.scss'],
})
export class ColunaQuadroComponent {
  @Input() status!: string;
  @Input() tasks: TaskType[] = [];
  @Output() handleTask = new EventEmitter();

  tasksFiltradas: TaskType[] = [];

  selectedTask(task: TaskType) {
    this.handleTask.emit(task);
  }
}
