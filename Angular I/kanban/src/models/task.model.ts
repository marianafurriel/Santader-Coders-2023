export class Task {
  title: string;
  description: string;
  date: Date;
  status: string;
  color: string;

  constructor(
    title = 'Nome da tarefa',
    description = 'Description default',
    date = new Date(),
    status = 'toDo',
    color = 'bg-primary-subtle'
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
    this.color = color;
  }
}
