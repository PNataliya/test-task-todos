import { TodoForm } from './TodoForm/TodoForm';
import { TodotList } from './TodotList/TodotList';

import { Container, ContainerTitle } from './App.styled';

export const App = () => {
  return (
    <Container>
      <ContainerTitle>To Do List</ContainerTitle>
      <TodoForm />
      <TodotList />
    </Container>
  );
};
