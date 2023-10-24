import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Output() addTask = new EventEmitter();

  public newTask = new Task();

  ngOnInit() {
    this.newTask.color = 'bg-primary-subtle';
  }

  submitTask(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(this.newTask);
    this.addTask.emit(this.newTask);
    this.newTask = new Task();
  }
}
