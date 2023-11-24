import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from 'src/types/taskType';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent {
  @Input() task!: TaskType;
  @Output() closeDetail = new EventEmitter();
  @Output() editar = new EventEmitter();
  @Output() deletar = new EventEmitter();

  close() {
    this.closeDetail.emit();
  }

  editarHandle(task: TaskType) {
    this.editar.emit(task);
  }
  deletarHandle(task: TaskType) {
    this.deletar.emit(task);
  }
}
