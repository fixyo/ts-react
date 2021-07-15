import React from "react";
import { Select } from "antd";

type SelectProps = React.ComponentProps<typeof Select>;

interface IdSelectProps
  extends Omit<SelectProps, "value" | "onChange" | "options"> {
  value: string | number | null | undefined;
  onChange: (value?: number) => void;
  defaultOptionName: string;
  options?: { name: string; value: number }[];
}

export const IdSelect = (props: IdSelectProps) => {
  const { value, onChange, defaultOptionName, options, ...restProps } = props;
  return (
    <Select
      {...restProps}
      value={toNumber(value)}
      onChange={(value) => onChange(toNumber(value))}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map((option) => {
        return (
          <Select.Option key={option.value} value={option.value}>
            {option.name}
          </Select.Option>
        );
      })}
    </Select>
  );
};

const toNumber = (value: unknown) => {
  return isNaN(Number(value)) ? 0 : Number(value);
};
