import React from "react";
import { User } from "./search-pannel";
import { Table, TableProps } from "antd";
import dayjs from "dayjs";

export interface IProject {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

interface IProps extends TableProps<IProject> {
  users: User[];
}

export const ListCpn = ({ users, ...props }: IProps) => {
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
          title: "部门",
          dataIndex: "organization",
          key: "organization",
          // sorter: (a, b) => a.name.localeCompare(b.name),
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
        {
          title: "创建时间",
          dataIndex: "created",
          key: "created",
          render: (value, project) => {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
              </span>
            );
          },
        },
      ]}
      {...props}
    ></Table>
  );
};
