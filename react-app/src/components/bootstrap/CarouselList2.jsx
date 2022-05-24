import styled from "styled-components";

const CarouselList2 = ({ data, activeIndex }) => {
  return (
    <List activeIndex={activeIndex}>
      {data.map(({ id, image }, index) => (
        <Image key={id} src={image} />
      ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  transform: ${({ activeIndex }) => `translateX(${-800 * activeIndex}px)`};
  transition: transform 1s;
`;
const Image = styled.img`
  width: 800px;
  height: 600px;
`;
export default CarouselList2;
