import styled, { css } from "styled-components";
import { useState } from "react";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    const nextIndex = activeIndex === index ? -1 : index;
    setActiveIndex(nextIndex);
  };
  return (
    <Container>
      <List>
        {data.map(({ id, image }, index) => (
          <Image key={id} src={image} isActive={activeIndex === index} />
        ))}
      </List>
      <BtnPrev onClick={handleClick}>이전</BtnPrev>
      <BtnNext onClick={handleClick}>다음</BtnNext>
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
  opacity: 0;
  transition: opacity 0.5;
`;
const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};
`;
const BtnPrev = styled(Btn)`
  left: 20px;
`;
const BtnNext = styled(Btn)`
  right: 20px;
`;
export default Carousel;
