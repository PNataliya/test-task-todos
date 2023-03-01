import { useEffect } from 'react';
import {
  Overlay,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ButtonCloseModal,
  Description,
  Status,
} from './Modal.styled';

const Modal = ({ setOpenModal, key, value }) => {
  console.log('key', key);
  console.log('value', value);
  const onClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      setOpenModal(false);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        document.body.style.overflow = '';
        setOpenModal(false);
      }
      if (event.currentTarget === event.target) {
        setOpenModal(false);
        document.body.style.overflow = '';
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [setOpenModal]);

  return (
    <Overlay onClick={onClickBackdrop}>
      <ModalContainer
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ModalContent>
          <ModalTitle>Fix bug with closing a tab</ModalTitle>
          <Description>
            Description
            <input type="text" name="description" key={value} />
          </Description>
          <Status>
            Status
            <input type="checkbox" />
          </Status>

          <ButtonCloseModal
            onClick={() => {
              document.body.style.overflow = '';
              setOpenModal(false);
            }}
          >
            X
          </ButtonCloseModal>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
