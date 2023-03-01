import { useSelector, useDispatch } from 'react-redux';
import { Todo } from '../Todo/Todo';

import { deleteTodo, getFilter, getTodos } from '../../redux/slice';
import { AddedTodos, WrapperTodo } from './TodotList.styled';

export const TodotList = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getTodos);
  const dispatch = useDispatch();
  const deleteSelectedTodo = todoid => dispatch(deleteTodo(todoid));

  const todosFilter = () => {
    const filterNormalize = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const filteredContacts = todosFilter();

  return (
    <div>
      <AddedTodos>
        <p>ID</p>
        <p>Title</p>
        <p>Description</p>
        <p>Status</p>
      </AddedTodos>

      {filteredContacts.map(({ id, name, description }, index) => {
        return (
          <WrapperTodo key={index} contactid={id}>
            <Todo
              id={id}
              name={name}
              description={description}
              onDeleteContact={() => deleteSelectedTodo(id)}
            />
          </WrapperTodo>
        );
      })}
    </div>
  );
};
