import React from "react";

export interface User {
  id: number;
  name: string;
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
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={(e) =>
          setParam({
            ...param,
            personId: e.target.value,
          })
        }
      >
        <option value="">负责人</option>
        {users.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
