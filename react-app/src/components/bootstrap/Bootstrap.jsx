import Accordion from "./Accordion";
import Dropdown from "./Dropdowm";
import { accordionData } from "../../data/bootstrap";

const Bootstrap = () => {
  return (
    <>
      <Accordion data={accordionData} />
      <Dropdown />
    </>
  );
};

export default Bootstrap;
