import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import ModalAddPost from "./ModalAddPost";

import { ReactComponent as ImgHome } from "../../assets/images/icons/home.svg";
import { ReactComponent as ImgAddPost } from "../../assets/images/icons/add-post.svg";

const Header = () => {
  const [isModalAddPost, setIsModalAddPost] = useState(false);
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
            <BtnNav>
              <ImgHome />
            </BtnNav>
            <BtnNav onClick={() => setIsModalAddPost(true)}>
              <ImgAddPost />
            </BtnNav>
          </Nav>
        </Main>
      </Container>
      <Outlet />
      {isModalAddPost && (
        <ModalAddPost onClose={() => setIsModalAddPost(false)} />
      )}
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
const BtnNav = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 5px;
`;

export default Header;
