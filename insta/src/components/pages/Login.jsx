import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  PageWrapper,
  Main,
  Box,
  Logo,
  BtnSubmit,
  Form,
  InputText,
  SignupWrapper,
} from "../atoms/login";
import { getToken } from "../../apis/user";
import instance from "../../apis";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../stores/index";

const Login = () => {
  const setIsLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, message, token } = await getToken({
      user_name: userName,
      password,
    });

    if (!success) return alert(message);

    alert("로그인 성공");
    instance.defaults.headers.common["Authorization"] = token;
    localStorage.token = token;
    setIsLogin(true);
    navigate("/");
  };

  return (
    <>
      <PageWrapper>
        <Main>
          <Box>
            <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" />
            <Form onSubmit={handleSubmit}>
              <InputText
                onChange={(e) => setUserName(e.target.value)}
                placeholder="전화번호, 사용자이름 또는 이메일"
                required
              />
              <InputText
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                type="password"
                required
              />
              <BtnSubmit>로그인</BtnSubmit>
            </Form>
            <FBLogin>Facebook으로 로그인</FBLogin>
            <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
          </Box>
          <Box>
            <SignupWrapper>
              계정이 없으신가요 <Link to="/signup">가입하기</Link>
            </SignupWrapper>
          </Box>
        </Main>
      </PageWrapper>
    </>
  );
};

const FBLogin = styled.div`
  color: #385185;
  font-weight: bold;
  font-size: 14px;
  margin-top: 30px;
`;
const ForgotPassword = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;

export default Login;
