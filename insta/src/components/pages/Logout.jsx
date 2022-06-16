import { useEffect } from "react";
import instance from "../../apis";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../stores/index";

const Logout = () => {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(loginState);
  useEffect(() => {
    delete localStorage.token;
    delete instance.defaults.headers.common["Authorization"];
    setIsLogin(false);
    navigate("/login");
  }, []);
  return null;
};

export default Logout;
