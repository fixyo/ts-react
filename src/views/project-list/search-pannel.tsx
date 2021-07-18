/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react"
import React from "react";
import { Form, Input, Select } from "antd";
import { IProject } from "./list-cpn";
import { UserSelector } from "components/user-select";

export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface IProps {
  users: User[];
  param: Partial<Pick<IProject, "name" | "personId">>;
  setParam: (param: IProps["param"]) => void;
}

export const SearchPannel = ({ param, setParam, users }: IProps) => {
  return (
    <Form css={{ marginBottom: "2rem", ">*": "" }} layout="inline">
      <Form.Item>
        <Input
          type="text"
          placeholder="项目名称"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />
      </Form.Item>
      <UserSelector
        defaultOptionName="负责人"
        value={param.personId}
        onChange={(value) =>
          setParam({
            ...param,
            personId: value,
          })
        }
      ></UserSelector>
      {/* <Select
        value={param.personId}
        onChange={(value) =>
          setParam({
            ...param,
            personId: value,
          })
        }
      >
        <Select.Option value="" key="x">
          负责人
        </Select.Option>
        {users.map((user) => {
          return (
            <Select.Option value={user.id} key={user.id}>
              {user.name}
            </Select.Option>
          );
        })}
      </Select> */}
    </Form>
  );
};
