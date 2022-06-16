import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Home } from "../../assets/images/icons/home.svg";

const Header = () => {
  return (
    <>
      <Container>
        <Main>
          <Link to="/">
            <ImgLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          </Link>
          <Search>
            <InputSearch />
          </Search>
          <Nav>
            <Home />
          </Nav>
        </Main>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.div`
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #dbdbdb;
`;
const Main = styled.div`
  max-width: 975px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgLogo = styled.img``;

const Search = styled.div``;
const InputSearch = styled.input``;

const Nav = styled.nav``;

export default Header;
