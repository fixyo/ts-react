import React from "react";
import { Form, Input, Select } from "antd";

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
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: IProps["param"]) => void;
}

export const SearchPannel = ({ param, setParam, users }: IProps) => {
  return (
    <Form layout="inline">
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />
      </Form.Item>
      <Select
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
      </Select>
    </Form>
  );
};
