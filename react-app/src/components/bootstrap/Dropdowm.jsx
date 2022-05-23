import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const wrapperEl = useRef(null);

  const onClick = (e) => {
    // console.log(e.target);
    console.log(e.currentTarget);
    // console.log(wrapperEl.current);
    // console.log("click!");
    if (!wrapperEl.current.contains(e.target)) setIsShow(false);
    // if (e.target !== buttonEl.current) setIsShow(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper ref={wrapperEl}>
      <Button onClick={() => setIsShow((prev) => !prev)}>
        Dropdown Button
      </Button>
      <Menu isShow={isShow}>
        <Item>#1</Item>
        <Item>#2</Item>
        <Item>#3</Item>
        <Item>#4</Item>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: #198754;
  color: #fff;
  border: none;
  padding: 10px 12px;
  border-radius: 4px;
  :after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
`;
const Menu = styled.ul`
  background: #fff;
  z-index: 1;
  display: ${({ isShow }) => !isShow && "none"};
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #999;
  width: 150px;
`;
const Item = styled.li`
  padding: 10px 12px;
  :hover {
    background: #efefef;
  }
  & + & {
    border-top: 1px solid #999;
  }
`;

export default Dropdown;
