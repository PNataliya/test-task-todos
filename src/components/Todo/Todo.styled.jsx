import styled from '@emotion/styled';

export const TodoData = styled.li`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  padding: 5px;

  border: none;
  border-radius: 3px;
  background-color: #ffffff;

  cursor: pointer;
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #0084ff;
  }
`;

export const Operations = styled.th`
  width: 40px;
  padding: 15px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #565656;
`;

export const OpenModal = styled.button`
  margin-left: 6px;
  padding: 1px;
  background-color: #fff;
  border: none;

  cursor: pointer;
  width: 310px;
  margin-right: 40px;
  &:hover,
  &:focus {
    background-color: #cce1ff;
    border: 1px solid #cce1ff;
  }
`;

// export const ButtonModal = styled.button`
//   margin-left: 6px;
//   padding: 1px;
//   background-color: #fff;
//   border: none;

//   cursor: pointer;
//   width: 310px;
//   margin-right: 40px;
//   &:hover,
//   &:focus {
//     background-color: #cce1ff;
//     border: 1px solid #cce1ff;
//   }
// `;

export const Id = styled.p`
  margin: 0;
  width: 43px;
  margin-left: 19px;
  margin-right: 40px;
`;

export const Name = styled.span`
  margin: 0;
  width: 80px;
  &:hover {
    background-color: #cce1ff;
    border: 1px solid #cce1ff;
  }
`;

export const Description = styled.p`
  margin: 0;
  width: 276px;
  margin-right: 40px;
`;

export const Checkbox = styled.input`
  margin: 0;
  width: 80px;
  margin-right: 40px;
`;
