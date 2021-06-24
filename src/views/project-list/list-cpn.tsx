import React from "react";
import { User } from "./search-pannel";
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
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>responsible person</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                {users.find((user) => user.id === item.personId)?.name ||
                  "unknow"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
