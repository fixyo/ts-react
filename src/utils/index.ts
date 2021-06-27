import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const omitFalsy = <T extends object, K extends keyof T>(object: T) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key as K];
    if (isFalsy(value)) {
      delete result[key as K];
    }
  });
  return result;
};

export const useMount = (cb: () => void) => {
  useEffect(() => {
    cb();
    // eslint-disable-next-line
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number): T => {
  console.log("setDebounceValuezhix");
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // 执行当前useEffect之前对上一个useEffect进行清除
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};
