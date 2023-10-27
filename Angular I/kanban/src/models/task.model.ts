export class Task {
  id: number;
  title: string;
  description: string;
  date: string | Date;
  status: string;
  color: string;
  valor: number;
  tags: string[];

  constructor(
    id = 0,
    title = '',
    description = '',
    date = '',
    status = '',
    valor = 0,
    color = 'bg-primary-subtle',
    tags = []
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
    this.valor = valor;
    this.color = color;
    this.tags = tags;
  }
}
