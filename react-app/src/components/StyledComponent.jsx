import styled, { css } from "styled-components"


const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  @media (max-width: 1024px){
    width: 768px;
  }
  @media (max-width: 768px){
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255,255, 255, 0.9);
  }
  ${({ inverted }) =>
    inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  &+button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  const color = "blue"
  return (
    <Box color={color}>
      <Button>안녕하세요</Button>
      <Button inverted>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;