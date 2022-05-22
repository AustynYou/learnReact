import Accordion from "./Accordion";
import Dropdown from "./Dropdowm";
import { accordionData, carouselData } from "../../data/bootstrap";
import Carousel from "./Carousel";

const Bootstrap = () => {
  return (
    <>
      <Accordion data={accordionData} />
      <Dropdown />
      <Carousel data={carouselData} />
    </>
  );
};

export default Bootstrap;
