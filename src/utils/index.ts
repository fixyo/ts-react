import { useEffect, useState } from "react";
export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const omitFalsy = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
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

export const useDebounce = (value: any, delay?: number) => {
  console.log("setDebounceValuezhix");
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // 执行当前useEffect之前对上一个useEffect进行清除
    return () => {
      console.log("clear timeout");
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};
