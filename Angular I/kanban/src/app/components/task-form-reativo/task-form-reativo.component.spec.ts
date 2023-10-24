import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormReativoComponent } from './task-form-reativo.component';

describe('TaskFormReativoComponent', () => {
  let component: TaskFormReativoComponent;
  let fixture: ComponentFixture<TaskFormReativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormReativoComponent]
    });
    fixture = TestBed.createComponent(TaskFormReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
