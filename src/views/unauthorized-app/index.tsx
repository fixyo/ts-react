import { useState } from "react";
import Login from "./login";
import Register from "./register";
const UnauthorizedApp = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  return (
    <div>
      {isLoginPage ? <Login /> : <Register />}
      <button onClick={(e) => setIsLoginPage(!isLoginPage)}>
        切换{isLoginPage ? "注册" : "登录"}
      </button>
    </div>
  );
};

export default UnauthorizedApp;
