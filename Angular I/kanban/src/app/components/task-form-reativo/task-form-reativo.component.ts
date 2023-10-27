import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form-reativo',
  templateUrl: './task-form-reativo.component.html',
  styleUrls: ['./task-form-reativo.component.scss'],
})
export class TaskFormReativoComponent {
  @Input() taskEditar: Task | null = null;

  public formTask: FormGroup = this.formBuilder.group({
    title: ['', Validators.required], //primeiro item é o valor default
    description: ['', Validators.required],
    date: ['', Validators.required],
    status: ['toDo', Validators.required],
    valor: [0, [Validators.min(0), Validators.required]],
    tags: this.formBuilder.array([]),
    color: ['bg-primary-subtle'],
  });

  @Output() addTask = new EventEmitter();
  @Output() editTask = new EventEmitter();

  get tags() {
    return this.formTask.get('tags') as FormArray;
  }

  public newTask = new Task();
  // tags: string[] = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.formTask = this.formBuilder.group({
      id: [this.taskEditar?.id],
      title: [this.taskEditar?.title, Validators.required], //primeiro item é o valor default
      description: [this.taskEditar?.description, Validators.required],
      date: [this.taskEditar?.date, Validators.required],
      status: [
        this.taskEditar?.status !== undefined ? this.taskEditar.status : 'toDo',
        Validators.required,
      ],
      valor: [
        this.taskEditar?.valor !== undefined ? this.taskEditar.valor : 0,
        Validators.min(0),
      ],
      color: [
        this.taskEditar?.color !== undefined
          ? this.taskEditar.color
          : 'bg-primary-subtle',
      ],
      tags:
        this.taskEditar?.tags.length === 0
          ? this.formBuilder.array(this.taskEditar.tags)
          : this.formBuilder.array([]),
    });
  }

  submitTask(task = this.newTask) {
    if (this.formTask.invalid) return;

    if (this.taskEditar) {
      this.editTask.emit(this.formTask.value);
    } else {
      this.addTask.emit(this.formTask.value);
    }

    this.formTask = this.formBuilder.group({
      title: ['', Validators.required], //primeiro item é o valor default
      description: ['', Validators.required],
      date: ['', Validators.required],
      status: ['toDo', Validators.required],
      tags: this.formBuilder.array([]),
      color: ['bg-primary-subtle'],
    });
  }

  addTag() {
    this.tags.push(this.formBuilder.control(''));
  }
}
