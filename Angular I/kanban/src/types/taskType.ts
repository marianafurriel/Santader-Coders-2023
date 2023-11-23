export type TaskType = {
  id: number;
  title: string;
  description: string;
  date: string | Date;
  status: string;
  color: string;
  valor: number;
  tags: string[];
};
