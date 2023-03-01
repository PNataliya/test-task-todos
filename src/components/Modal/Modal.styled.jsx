import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  opacity: 1;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;

  overflow-y: auto;
  z-index: 2;
  transition: opacity 300ms, visibility 250ms ease-in-out;
`;

export const ModalContainer = styled.div`
  position: absolute;
  min-height: 100%;
  width: 600px;

  justify-content: center;
  align-items: center;
  padding: 100px 10px;
  display: flex;
`;

export const ModalContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 40px;
  padding-bottom: 40px;
  background: rgba(193, 197, 234, 0.7);
  border-radius: 10px;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`;

export const ModalTitle = styled.h2`
  letter-spacing: 0.03px;
  text-align: center;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 45px;
  font-size: 25px;
  line-height: 1.17;
  display: flex;
  position: relative;
  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 30px;
  height: 30px;
  color: #212121;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: red;
  }
`;

export const Description = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Status = styled.label`
  margin-right: 10px;
`;
