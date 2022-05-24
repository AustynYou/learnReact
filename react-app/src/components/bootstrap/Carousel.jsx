import styled from "styled-components";
import { useState } from "react";
import CarouselList1 from "./CarouselList1";
import CarouselList2 from "./CarouselList2";

const Carousel = ({ data, type }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (i) => {
    // if (i === -1 && activeIndex === 0) {
    //   setActiveIndex(data.length - 1);
    // } else if (i === 1 && activeIndex === data.length - 1) {
    //   setActiveIndex(0);
    // } else {
    //   setActiveIndex(activeIndex + i);
    // }

    const firstIndex = 0;
    const lastIndex = data.length - 1;

    let nextIndex = activeIndex + i;
    if (nextIndex > lastIndex) {
      nextIndex = firstIndex;
    } else if (nextIndex < firstIndex) {
      nextIndex = lastIndex;
    }
    setActiveIndex(nextIndex);
  };

  return (
    <Container>
      {
        {
          fadeIn: <CarouselList1 data={data} activeIndex={activeIndex} />,
          slide: <CarouselList2 data={data} activeIndex={activeIndex} />,
        }[type]
      }
      <BtnPrev onClick={() => handleClick(-1)}>이전</BtnPrev>
      <BtnNext onClick={() => handleClick(+1)}>다음</BtnNext>
      <PageList>
        {data.map((e, i) => (
          <BtnPage
            onClick={() => setActiveIndex(i)}
            isActive={activeIndex === i}
          >
            {i + 1}
          </BtnPage>
        ))}
      </PageList>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  overflow: hidden;
`;
const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const BtnPrev = styled(Btn)`
  left: 20px;
`;
const BtnNext = styled(Btn)`
  right: 20px;
`;

const PageList = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnPage = styled.button`
  border-radius: ${({ isActive }) => isActive && "50%"};
`;

export default Carousel;
