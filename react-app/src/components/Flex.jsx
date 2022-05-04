import styled from "styled-components";

const Flex = () => {
  return (
    <Parent>
      <Box />
      <Box borderBox />
      <Box />
    </Parent>
  );
};

const Parent = styled.div`
  display: flex;
`;

const Box = styled.div`
  background: red;
  width: 100px;
  height: 100px;
  margin: 20px;
  padding: 50px;
  box-sizing: ${({ borderBox }) => borderBox && "border-box"};
`;

export default Flex;