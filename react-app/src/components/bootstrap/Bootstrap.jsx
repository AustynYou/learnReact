import { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdowm";
import { accordionData, carouselData } from "../../data/bootstrap";
import Carousel from "./Carousel";
import ModalFirst from "./ModalFirst";

// type 종류
// fadeIn: fadeIn 효과
// slide: 슬라이드 효과
const Bootstrap = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowModalFirst, setIsShowModalFirst] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((prev) => !prev)}>btn</button>
      <Accordion data={accordionData} />
      {isShow && <Dropdown />}
      <Carousel data={carouselData} type="fadeIn" />
      <Carousel data={carouselData} type="slide" />
      <h2>이름: 홍길동</h2>
      <button onClick={() => setIsShowModalFirst(true)}>이름 바꾸기</button>
      {isShowModalFirst && (
        <ModalFirst onClose={() => setIsShowModalFirst(false)} />
      )}
    </>
  );
};

export default Bootstrap;
