import styled from "@emotion/styled";
import { Spin } from "antd";

export const Row = styled.div<{
  gap?: number | boolean;
  justify?: string;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : undefined)};
  margin-bottom: ${(props) => props.marginBottom + "rem"};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`;

const Fullpage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FullpageLoading = () => {
  return (
    <Fullpage>
      <Spin size="large"></Spin>
    </Fullpage>
  );
};
