import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const addTodo = ({ title, userId, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', { title, userId, completed });
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodo = ({
  id,
  title,
  completed,
}: Omit<Todo, 'userId'>): Promise<Todo> => {
  return client.patch(`/todos/${id}`, {
    completed,
    title,
  });
};
