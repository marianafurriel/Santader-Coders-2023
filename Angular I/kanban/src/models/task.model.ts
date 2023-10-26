export class Task {
  title: string;
  description: string;
  date: string | Date;
  status: string;
  color: string;

  constructor(
    title = '',
    description = '',
    date = '',
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
