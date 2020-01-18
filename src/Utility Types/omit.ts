interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Omit<Todo, 'description' | 'completed'>;

const todo: TodoPreview = {title: 'Clean'};
