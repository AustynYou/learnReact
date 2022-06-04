import { useState } from "react";
import styled from "styled-components";
import { createUser } from "../../apis/user";
import {
  PageWrapper,
  Main,
  Box,
  Logo,
  BtnSubmit,
  Form,
  InputText,
  SignupWrapper,
  CustomLink,
} from "../atoms/login";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    user_name: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, user_name, password, passwordConfirm } = form;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser(form);
  };

  return (
    <>
      <PageWrapper>
        <Main>
          <Box>
            <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" />
            <Welcome>친구들의 사진과 동영상을 보려면 가입하세요.</Welcome>
            <BtnSubmit>Facebook으로 로그인</BtnSubmit>

            <Form onSubmit={handleSubmit}>
              <InputText
                name="name"
                value={name}
                placeholder="성명"
                onChange={handleChange}
              />
              <InputText
                name="user_name"
                value={user_name}
                placeholder="사용자 이름"
                onChange={handleChange}
              />
              <InputText
                name="password"
                value={password}
                placeholder="비밀번호"
                onChange={handleChange}
                type="password"
              />
              <InputText
                name="passwordConfirm"
                value={passwordConfirm}
                placeholder="비밀번호 확인"
                onChange={handleChange}
                type="password"
              />
              <BtnSubmit>가입</BtnSubmit>
            </Form>
          </Box>
          <Box>
            <SignupWrapper>
              계정이 있으신가요 <CustomLink to="/login">로그인하기</CustomLink>
            </SignupWrapper>
          </Box>
        </Main>
      </PageWrapper>
    </>
  );
};
const Welcome = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Signup;
