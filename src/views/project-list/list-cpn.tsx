import React from "react";
import { User } from "./search-pannel";
import { Table } from "antd";
import { spawn } from "node:child_process";

interface IProject {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

interface IProps {
  list: IProject[];
  users: User[];
}

export const ListCpn = ({ list, users }: IProps) => {
  return (
    <Table
      rowKey="id"
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          key: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          key: "responsiblePerson",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    ></Table>
  );
};
