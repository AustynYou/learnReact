import styled from 'styled-components';

const TodoTemplate = () => {
  return   (
  <Layout>
    <Container>
      <Title>일정관리</Title>
        <form>
          <InputWrapper>
            <InputText placeholder='할 일을 입력하세요'/>
              <BtnSubmit>입력</BtnSubmit>
          </InputWrapper>
        </form>
        <List>
          <Item>
            <label>
              <input type="checkbox" />
              <Content>리액트의 기초 알아보기</Content>
            </label>
          </Item>
          <Item>
            <label>
              <input type="checkbox" />
              <Content>리액트의 기초 알아보기</Content>
            </label>
          </Item>
          <Item>
            <label>
              <input type="checkbox" />
              <Content>리액트의 기초 알아보기</Content>
            </label>
          </Item>
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

const InputWrapper = styled.div`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
  background: #000;
  color: #fff;
  border: none;
  height: 40px;
  padding: 0 10px;
  ::placeholder{
    color: #dee2e6;
  }
`;
const BtnSubmit = styled.button`
  width: 50px;
  border: none;
  background: #dee2e6;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 300px;
  background: #fff;
`;
const Item = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px;
`;
const Content = styled.span`
  margin-left: 15px;

`;

export default TodoTemplate;