import React, { FormEvent, memo } from "react";
import { useAuth } from "context/auth-context";

const baseUrl = process.env.REACT_APP_API_URL;

export default memo(function Login() {
  const { login, user } = useAuth();

  console.log("user", user);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    // const debounceParams = useDebounce({username, password})

    login({ username, password });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="username">username</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id={"password"} />
      </div>
      <button type="submit">登录</button>
    </form>
  );
});
