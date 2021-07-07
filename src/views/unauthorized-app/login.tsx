import React, { memo } from "react";
import { useAuth } from "context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from ".";

// const baseUrl = process.env.REACT_APP_API_URL;

export default memo(function Login({
  onError,
}: {
  onError: (error: Error) => void;
}) {
  const { login, user } = useAuth();

  console.log("user", user);

  const handleSubmit = (values: { username: string; password: string }) => {
    // const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    // const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    // const debounceParams = useDebounce({username, password})

    login(values).catch((error) => onError(error));
  };
  return (
    <Form onFinish={(e) => handleSubmit(e)}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "请输入用户名",
          },
        ]}
      >
        {/* <label htmlFor="username">username</label> */}
        <Input type="text" id={"username"} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码",
          },
        ]}
      >
        {/* <label htmlFor="password">password</label> */}
        <Input type="password" id={"password"} placeholder="密码" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
});
