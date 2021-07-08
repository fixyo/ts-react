import { useState } from "react";

interface State<T> {
  error: Error | null;
  data: T | null;
  status: "idle" | "loading" | "error" | "success";
}

const defaultState: State<null> = {
  status: "idle",
  data: null,
  error: null,
};

const defaultConfig = {
  throwError: false,
};

export const useAsync = <T>(
  userState?: State<T>,
  userConfig?: typeof defaultConfig
) => {
  const config = {
    ...defaultConfig,
    ...userConfig,
  };
  const [state, setstate] = useState({
    ...defaultState,
    ...userState,
  });

  const setData = (data: T) => {
    return setstate({
      data,
      error: null,
      status: "success",
    });
  };

  const setError = (error: Error) => {
    return setstate({
      error,
      data: null,
      status: "error",
    });
  };

  const run = (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      throw new Error("need promise here !!!");
    }

    setstate({ ...state, status: "loading" });

    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        // catch会消化异常，除非主动抛出，否则try catch接不到异常
        setError(error);
        if (config.throwError) {
          return Promise.reject(error);
        }
        return error;
      });
  };

  return {
    isIdle: state.status === "idle",
    isLoading: state.status === "loading",
    isError: state.status === "error",
    isSuccess: state.status === "success",
    run,
    setData,
    setError,
    ...state,
  };
};
