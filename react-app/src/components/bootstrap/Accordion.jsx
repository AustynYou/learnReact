import { useState } from "react";
import styled, { css } from "styled-components";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    const nextIndex = activeIndex === index ? -1 : index;
    setActiveIndex(nextIndex);
  };
  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id} isActive={activeIndex === index}>
          <Header onClick={() => handleClick(index)}>
            {title}
            <BtnArrow />
          </Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};
const List = styled.div`
  margin: 40px;
  border: 1px solid #999;
  border-radius: 4px;
`;

const Item = styled.div`
  & + & {
    border-top: 1px solid #999;
  }
  ${({ isActive }) =>
    isActive
      ? css`
          ${Header} {
            color: rgb(0, 50, 200);
            background-color: rgba(0, 50, 200, 0.2);
            ${BtnArrow} {
              transform: rotate(-180deg);
              background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
            }
          }
        `
      : css`
          ${Body} {
            display: none;
          }
        `};
`;

const Header = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const BtnArrow = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;

const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #999;
`;

export default Accordion;
