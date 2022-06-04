import styled from "styled-components";
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

const Login = () => {
  return (
    <>
      <PageWrapper>
        <Main>
          <Box>
            <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" />
            <Form>
              <InputText placeholder="전화번호, 사용자이름 또는 이메일" />
              <InputText placeholder="비밀번호" type="password" />
              <BtnSubmit>로그인</BtnSubmit>
            </Form>
            <FBLogin>Facebook으로 로그인</FBLogin>
            <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
          </Box>
          <Box>
            <SignupWrapper>
              계정이 없으신가요 <CustomLink to="/signup">가입하기</CustomLink>
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
