import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const linkList = [
  {
    link: "/",
    name: "메인",
  },
  {
    link: "/movie",
    name: "영화",
  },
  {
    link: "/book",
    name: "책",
  },
];

const TopNav = () => {
  const { pathname } = useLocation();

  if (pathname === "/") return <></>;

  return (
    <Container>
      <Nav>
        {linkList.map(({ link, name }) => (
          <Link to={link} key={link}>
            <Button isActive={pathname === link}>{name}</Button>
          </Link>
        ))}
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`;
const Nav = styled.nav``;
const Button = styled.button`
  padding: 10px 15px;
  background: ${({ isActive }) => (isActive ? "#000" : "#fff")};
  color: ${({ isActive }) => isActive && "#fff"};
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 5px;
`;
export default TopNav;
