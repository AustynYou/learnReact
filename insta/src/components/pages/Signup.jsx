import { useState } from "react";
import styled from "styled-components";
import { createUser } from "../../apis/user";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { user_name, password, passwordConfirm } = form;

    if (user_name.length < 4) return alert("아이디를 4글자 이상 입력하세요.");
    if (password !== passwordConfirm) return alert("비밀번호를 확인하세요.");

    const { success, message } = await createUser(form);

    if (success) {
      alert("환영합니다.");
      navigate("/login");
    } else {
      alert(message);
      setForm((prev) => ({ ...prev, user_name: "" }));
    }
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
                placeholder="성명"
                onChange={handleChange}
              />
              <InputText
                value={form.user_name}
                name="user_name"
                placeholder="사용자 이름"
                onChange={handleChange}
              />
              <InputText
                name="password"
                placeholder="비밀번호"
                onChange={handleChange}
                type="password"
              />
              <InputText
                name="passwordConfirm"
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
