import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
})
export class StickerComponent {
  @Input() task!: Task;
}
