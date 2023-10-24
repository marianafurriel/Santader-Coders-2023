import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-coluna-quadro',
  templateUrl: './coluna-quadro.component.html',
  styleUrls: ['./coluna-quadro.component.scss'],
})
export class ColunaQuadroComponent {
  @Input() status!: string;
  @Input() tasks: Task[] = [];
  tasksFiltradas: Task[] = [];

  
}
