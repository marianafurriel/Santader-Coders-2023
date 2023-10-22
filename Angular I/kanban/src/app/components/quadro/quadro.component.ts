import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.scss'],
})
export class QuadroComponent {
  @Input() tasks!: Task[];
}
