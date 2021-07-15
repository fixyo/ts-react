import React, { useState, useEffect } from "react";
import { useMount, useDebounce } from "utils";
import { SearchPannel } from "./search-pannel";
import { ListCpn } from "./list-cpn";
import { omitFalsy } from "utils";
import { useRequest } from "utils/request";
import styled from "@emotion/styled";
import { useAsync } from "utils/use-async";
import { IProject } from "./list-cpn";
import { User } from "./search-pannel";
import { useUrlQueryParam } from "utils/url";

export default function ProjectList() {
  // const [, setParam] = useState({
  //   name: "",
  //   personId: "",
  // });

  // const value: any = undefined;
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  // setParam({name:'1'})
  const debounceParams = useDebounce(param, 300);
  const { run, isLoading, data: list } = useAsync<IProject[]>();
  const { run: userRun, data: users } = useAsync<User[]>();
  const request = useRequest();

  useEffect(() => {
    run(request("/projects", { data: omitFalsy(debounceParams) }));
    // eslint-disable-next-line
  }, [debounceParams]);

  useMount(() => {
    userRun(request("/users"));
  });

  return (
    <Container>
      <SearchPannel param={param} setParam={setParam} users={users || []} />
      <ListCpn
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
      ></ListCpn>
    </Container>
  );
}

const Container = styled.div`
  padding: 3.2rem;
`;
