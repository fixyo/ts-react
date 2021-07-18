import { useAsync } from "utils/use-async";
// import { User } from "views/project-list/search-pannel";
import { IdSelect } from "./id-select";

export const UserSelector = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: users } = useAsync<{ name: string; value: number }[]>();
  return <IdSelect options={users || []} {...props}></IdSelect>;
};
