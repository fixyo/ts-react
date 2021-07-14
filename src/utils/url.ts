import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    useMemo(() => {
      return keys.reduce((prev, key: K) => {
        return { ...prev, [key]: searchParams.get(key) || "" };
      }, {} as { [key in K]: string });
      // eslint-disable-next-line
    }, [searchParams]),
    setSearchParams,
  ] as const;
};

// const a = [12, '12', {name: 'ec'}] as const
