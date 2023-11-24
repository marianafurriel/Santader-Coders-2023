import { Component, Input } from '@angular/core';
import { TaskType } from 'src/types/taskType';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.scss'],
})
export class QuadroComponent {
  @Input() tasks!: TaskType[];
}
