import styled from 'styled-components';

const TodoItem = ({ item: { id, text }, onDelete }) => {
  return ( 
  <Item>
    <label>
      <input type="checkbox" />
      <Content>{text}</Content>
    </label>
    <BtnDelete
    onClick={() => onDelete(id)}
    >삭제</BtnDelete>
  </Item>
  );
};


const Item = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  &+&{
    border-top: 1px solid #ddd;
  }
  :nth-child(2n){
    background: #efefef;
  }
`;
const Content = styled.span`
  margin-left: 15px;

`;
const BtnDelete = styled.button`
  
`;
export default TodoItem;