import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';
import { TaskFiltroComponent } from './components/task-filtro/task-filtro.component';
import { ColunaQuadroComponent } from './components/coluna-quadro/coluna-quadro.component';
import { QuadroComponent } from './components/quadro/quadro.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    CurrencyFormatPipe,
    TaskDetailComponent,
    DateGreaterThanTodayDirective,
    TaskFiltroComponent,
    ColunaQuadroComponent,
    QuadroComponent,
  ],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
