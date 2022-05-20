import styled, { css } from "styled-components";

const TodoItem = ({ item, onDelete, onChecked }) => {
  const { id, text, isChecked } = item;
  return (
    <Item isChecked={isChecked}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onChecked(id)}
        />
        <Content>{text}</Content>
      </label>
      <BtnDelete onClick={() => onDelete(id)}>삭제</BtnDelete>
    </Item>
  );
};

const Item = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  & + & {
    border-top: 1px solid #ddd;
  }
  :nth-child(2n) {
    background: #efefef;
  }
  background: ${({ isChecked }) => isChecked && "green !important"};
  ${({ isChecked }) =>
    isChecked &&
    css`
      background: green !important;
      ${Content} {
        color: #ddd;
        text-decoration: line-through;
      }
    `};
`;
const Content = styled.span`
  margin-left: 15px;
`;
const BtnDelete = styled.button``;
export default TodoItem;
