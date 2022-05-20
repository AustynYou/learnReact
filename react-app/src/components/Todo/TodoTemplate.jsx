import { useState, useRef } from 'react';
import styled from 'styled-components';

import Item from './Item';
import Form from './Form';


const TodoTemplate = () => {
  const [list, setList] = useState([]);
  const nextId = useRef(1);

  const handleSubmit = (text) => {
    const newList = [...list, { id: nextId.current, text, isChecked: false }];
    // newList.push(text)
    setList(newList);
    nextId.current++;
  };

  const handleDelete = (deleteId) => {
    const newList = list.filter(item=>item.id !== deleteId);
    setList(newList);
  };

  const handleChecked = (id) => {
    const newList = list.map((item)=>{
      return item.id === id  ?  { ...item, isChecked: !item.isChecked } : item;
      
    });
    setList(newList);
  }

  return   (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onSubmit={handleSubmit} />
        <List>
          {list.map((item)=>(
              <Item 
                item={item} 
                onDelete={handleDelete} 
                onChecked={handleChecked} 
                key={item.id}
              />
            ))}
        </List>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #e9ecef;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 500px;
`;

const Title = styled.div`
  background: #22b8cf;
  padding: 15px 0;
  text-align: center;
  color: #fff;
  font-size: 20px;

`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 300px;
  background: #fff;
  
`;

export default TodoTemplate;