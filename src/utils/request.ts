import qs from "qs";
import { useAuth } from "context/auth-context";
import * as auth from "utils/auth-provider";
const baseUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}
export const request = (
  path: string,
  { data, token, headers, ...others }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...others,
  };
  if (config.method.toUpperCase() === "GET") {
    path += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return fetch(`${baseUrl}${path}`, config).then(async (res) => {
    if (res.status === 401) {
      auth.logOut();
      window.location.reload();
      return Promise.reject({ msg: "need login" });
    }

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useRequest = () => {
  const { user } = useAuth();
  // 通过泛型，传入其他类型。utility type 对这种类型进行操作
  return (...[path, config]: Parameters<typeof request>) =>
    request(path, { ...config, token: user?.token });
};
