import React, { useState, useEffect } from "react";
import qs from "qs";
import { useMount, useDebounce } from "utils";
import { SearchPannel } from "./search-pannel";
import { ListCpn } from "./list-cpn";
import { omitFalsy } from "utils";

const baseUrl = process.env.REACT_APP_API_URL;

export default function ProjectList() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debounceParams = useDebounce(param, 3000);
  useEffect(() => {
    fetch(
      `${baseUrl}/projects?${qs.stringify(omitFalsy(debounceParams))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParams]);

  useMount(() => {
    fetch(`${baseUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  return (
    <div>
      <SearchPannel param={param} setParam={setParam} users={users} />
      <ListCpn list={list} users={users}></ListCpn>
    </div>
  );
}
