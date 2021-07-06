import React, { memo } from "react";
import { useAuth } from "context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from "./index";

// const baseUrl = process.env.REACT_APP_API_URL;

export default memo(function Login() {
  const { register } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={(e) => handleSubmit(e)}>
      <Form.Item name="username">
        <Input type="text" id={"username"} placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password">
        <Input type="password" id={"password"} placeholder="密码" />
      </Form.Item>
      <LongButton htmlType="submit" type="primary">
        注册
      </LongButton>
    </Form>
  );
});
