import { User } from "views/project-list/search-pannel";

const baseUrl = process.env.REACT_APP_API_URL;
const localstorageKey = "__auth_Provider_token__";

export const getToken = () => localStorage.getItem(localstorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  localStorage.setItem(localstorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      // setList(await res.json());
      return handleUserResponse(await res.json());
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      // setList(await res.json());
      return handleUserResponse(await res.json());
    }
  });
};

export const logOut = () => localStorage.removeItem(localstorageKey);
