import { useState } from 'react';
import {
  FormDataInput,
  EntryFieldLabel,
  InputName,
  InputArea,
  ButtonSubmit,
} from './TodoForm.styled';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo, getTodos } from '../../redux/slice';

export const TodoForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(1);

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeDescription = e => setDescription(e.currentTarget.value);

  const todos = useSelector(getTodos);
  const dispach = useDispatch();

  const onSubmitForm = e => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    const newContact = {
      id: count,
      name,
      description,
    };
    setCount(count + 1);
    console.log('ID', newContact.id);
    console.log('ID', newContact.description);

    if (!todos.some(todo => todo.name.toLowerCase() === name.toLowerCase())) {
      dispach(addTodo(newContact));
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setDescription('');
  };

  return (
    <FormDataInput onSubmit={onSubmitForm}>
      <EntryFieldLabel>
        <InputName>Title</InputName>
        <InputArea
          onChange={onChangeName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Title may contain only letters"
          placeholder="Enter title"
          required
        />
      </EntryFieldLabel>
      <EntryFieldLabel>
        <InputName>Description</InputName>
        <InputArea
          onChange={onChangeDescription}
          type="text"
          name="description"
          value={description}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Title may contain only letters"
          placeholder="Enter description"
          required
        />
      </EntryFieldLabel>
      <ButtonSubmit type="submit">Create</ButtonSubmit>
    </FormDataInput>
  );
};
