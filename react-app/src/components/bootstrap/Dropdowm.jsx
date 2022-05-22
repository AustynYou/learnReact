import { useState, useEffect } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      console.log("click");
      setIsShow(false);
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper>
      <Button onClick={() => setIsShow(!isShow)}>Dropdown Button</Button>
      {isShow && (
        <Menu>
          <Item>#1</Item>
          <Item>#2</Item>
          <Item>#3</Item>
          <Item>#4</Item>
        </Menu>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: #198754;
  color: #fff;
  border: none;
  padding: 10px 12px;
  border-radius: 4px;
`;
const Menu = styled.ul`
  background: #fff;
  z-index: 1;
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
