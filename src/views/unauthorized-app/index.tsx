import Column from "antd/lib/table/Column";
import { useState } from "react";
import Login from "./login";
import Register from "./register";
import { Card } from "antd";
const UnauthorizedApp = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isLoginPage ? <Login /> : <Register />}
        <button onClick={(e) => setIsLoginPage(!isLoginPage)}>
          切换{isLoginPage ? "注册" : "登录"}
        </button>
      </Card>
    </div>
  );
};

export default UnauthorizedApp;
