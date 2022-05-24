import { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdowm";
import { accordionData, carouselData } from "../../data/bootstrap";
import Carousel from "./Carousel";
import ModalFirst from "./ModalFirst";
import ModalNickName from "./ModalNickname";

// type 종류
// fadeIn: fadeIn 효과
// slide: 슬라이드 효과
const Bootstrap = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowModalFirst, setIsShowModalFirst] = useState(false);
  const [name, setName] = useState("홍길동");
  const [isShowModalNickname, setIsShowModalNickname] = useState(false);
  const [nickname, setNickName] = useState("별명");

  return (
    <>
      <button onClick={() => setIsShow((prev) => !prev)}>btn</button>
      <Accordion data={accordionData} />
      {isShow && <Dropdown />}
      <Carousel data={carouselData} type="fadeIn" />
      <Carousel data={carouselData} type="slide" />
      <h2>이름: {name}</h2>
      <button onClick={() => setIsShowModalFirst(true)}>이름 바꾸기</button>
      {isShowModalFirst && (
        <ModalFirst
          onClose={() => setIsShowModalFirst(false)}
          onSubmit={(val) => setName(val)}
        />
      )}

      <h2>닉네임: {nickname}</h2>
      <button onClick={() => setIsShowModalNickname(true)}>별명 바꾸기</button>
      {isShowModalNickname && (
        <ModalNickName
          onClose={() => setIsShowModalNickname(false)}
          onSubmit={(val) => setNickName(val)}
        />
      )}
    </>
  );
};

export default Bootstrap;
