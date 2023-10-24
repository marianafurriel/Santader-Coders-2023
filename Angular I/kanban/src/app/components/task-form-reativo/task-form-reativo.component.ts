import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form-reativo',
  templateUrl: './task-form-reativo.component.html',
  styleUrls: ['./task-form-reativo.component.scss'],
})
export class TaskFormReativoComponent {
  public formTask: FormGroup = this.formBuilder.group({
    title: ['', Validators.required], //primeiro item é o valor default
    description: ['', Validators.required],
    date: ['', Validators.required],
    status: ['toDo', Validators.required],
    color: ['bg-primary-subtle'],
  });

  @Output() addTask = new EventEmitter();

  public newTask = new Task();

  // ngOnInit() {
  //   this.newTask.color = 'bg-primary-subtle';
  // }
  constructor(private formBuilder: FormBuilder) {}

  submitTask() {
    if (this.formTask.invalid) return;
    this.addTask.emit(this.formTask.value);
    this.formTask.reset();
    // this.newTask = new Task();
  }
}
