import { useState } from 'react';
import {
  TodoData,
  OpenModal,
  Button,
  Id,
  Name,
  Description,
  Checkbox,
} from './Todo.styled';
import Modal from '../Modal/Modal';

export const Todo = ({ id, name, description, onDeleteContact }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TodoData>
        <Id>{id}</Id>
        <OpenModal
          onClick={() => {
            document.body.style.overflow = 'hidden';
            setOpenModal(true);
          }}
        >
          <Name>{name}</Name>
        </OpenModal>

        <Description>{description}</Description>

        <Checkbox type="checkbox" />

        <Button type="button" onClick={onDeleteContact}>
          X{/* <FaTrash /> */}
        </Button>
      </TodoData>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};
