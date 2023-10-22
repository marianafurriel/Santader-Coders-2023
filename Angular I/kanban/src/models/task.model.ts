export class Task {
  title: string;
  description: string;
  date: Date;
  status: string;
  color: string;

  constructor(
    title = '',
    description = '',
    date = new Date(),
    status = '',
    color = 'bg-primary-subtle'
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
    this.color = color;
  }
}
