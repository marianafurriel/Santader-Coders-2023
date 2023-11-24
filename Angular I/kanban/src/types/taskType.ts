export type TaskType = {
  _id?: string;
  title: string;
  description: string;
  date: string | Date;
  status: string;
  color: string;
  valor: number;
  tags: string[];
};
