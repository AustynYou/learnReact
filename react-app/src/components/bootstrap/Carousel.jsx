import styled from "styled-components";

const Carousel = ({ data }) => {
  return (
    <Container>
      <List>
        {data.map(({ id, image }) => (
          <Image key={id} src={image} />
        ))}
      </List>
      <BtnPrev>이전</BtnPrev>
      <BtnNext>다음</BtnNext>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
`;
const List = styled.div``;
const Image = styled.img`
  width: 800px;
  height: 600px;
  position: absolute;
`;
const Btn = styled.button`
  position: absolute;
  left: 20px;
  transform: translateY(-50%);
`;
const BtnPrev = styled.button(Btn)`
left: 20px;
`;
const BtnNext = styled.button(Btn)`
  right: 20px;
`;
export default Carousel;
