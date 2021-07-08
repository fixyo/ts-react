import React, { memo } from "react";
import { useAuth } from "context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from "./index";
import { useAsync } from "utils/use-async";

// const baseUrl = process.env.REACT_APP_API_URL;

export default memo(function Login({
  onError,
}: {
  onError: (error: Error) => void;
}) {
  const { register } = useAuth();

  const { isLoading, run } = useAsync(undefined, { throwError: true });

  const handleSubmit = ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    run(register(values)).catch((error) => onError(error));
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
        <Input type="password" id={"password"} placeholder="密码" />
      </Form.Item>
      <Form.Item
        name="cpassword"
        rules={[
          {
            required: true,
            message: "请确认密码",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("两次密码不一致"));
            },
          }),
        ]}
      >
        <Input type="password" id={"cpassword"} placeholder="确认密码" />
      </Form.Item>
      <LongButton loading={isLoading} htmlType="submit" type="primary">
        注册
      </LongButton>
    </Form>
  );
});
