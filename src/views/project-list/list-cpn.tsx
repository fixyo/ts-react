import React from "react";
import { User } from "./search-pannel";
import { Table } from "antd";

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
      ]}
      dataSource={list}
    ></Table>
  );
};
