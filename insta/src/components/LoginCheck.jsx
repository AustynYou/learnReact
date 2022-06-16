import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../stores/index";

const LoginCheck = () => {
  const isLogin = useRecoilValue(loginState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);
  return <Outlet />;
};

export default LoginCheck;
