import { useState, useEffect } from "react";

import Router from "./Router";
import instance from "./apis";
import { useSetRecoilState } from "recoil";
import { loginState } from "./stores/index";

function App() {
  const setIsLogin = useSetRecoilState(loginState);
  const [isLoginChecked, setIsLoginChecked] = useState(false);

  useEffect(() => {
    const { token } = localStorage;
    if (token) {
      instance.defaults.headers.common["Authorization"] = token;
      setIsLogin(true);
    }
    setIsLoginChecked(true);
  }, []);

  if (!isLoginChecked) return <></>;

  return <Router />;
}

export default App;
