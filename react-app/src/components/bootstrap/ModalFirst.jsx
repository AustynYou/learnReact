import styled from "styled-components";

const ModalFirst = ({ onClose }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <h2>이름 바꾸기</h2>
        <Main>
          <input />
        </Main>

        <Footer>
          <button>취소</button>
          <button>확인</button>
        </Footer>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
`;
const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 400px;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 4px;
`;
const Main = styled.div``;
const Footer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
`;
export default ModalFirst;
