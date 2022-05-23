import { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdowm";
import { accordionData, carouselData } from "../../data/bootstrap";
import Carousel from "./Carousel";

const Bootstrap = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((prev) => !prev)}>btn</button>
      <Accordion data={accordionData} />
      {isShow && <Dropdown />}
      <Carousel data={carouselData} />
    </>
  );
};

export default Bootstrap;
