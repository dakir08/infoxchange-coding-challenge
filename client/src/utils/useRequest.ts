import * as React from "react";

export interface MakeRequestInput<T> {
  request: () => Promise<T>;
  onSuccess: (response: T) => void;
  onError: (error: any) => void;
}

export const useRequest = <T>() => {
  const [data, setData] = React.useState<T | null>(null);
  const [makingRequest, setMakingRequest] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);

  const makeRequest = async <T>(params: MakeRequestInput<T>) => {
    const { request, onSuccess, onError } = params;
    setMakingRequest(true);
    try {
      const res = await request();
      onSuccess(res);
      setMakingRequest(false);
    } catch (error) {
      onError(error);
      setMakingRequest(false);
    }
  };

  return { data, setData, error, setError, makingRequest, makeRequest };
};
