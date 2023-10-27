export class Task {
  id: number;
  title: string;
  description: string;
  date: string | Date;
  status: string;
  color: string;

  constructor(
    id = 0,
    title = '',
    description = '',
    date = '',
    status = '',
    color = 'bg-primary-subtle'
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
    this.color = color;
  }
}
