import styled from "styled-components";

const CarouselList1 = ({ data, activeIndex }) => {
  return (
    <List>
      {data.map(({ id, image }, index) => (
        <Image key={id} src={image} isActive={activeIndex === index} />
      ))}
    </List>
  );
};

const List = styled.div``;
const Image = styled.img`
  width: 800px;
  height: 600px;
  position: absolute;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s;
`;

export default CarouselList1;
