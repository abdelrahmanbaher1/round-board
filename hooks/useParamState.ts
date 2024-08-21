import { useEffect } from "react";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

type TReturn = [
  param: string,
  setParam: (val: string) => void,
  getParamUrl: (val: string) => string
];

const useParamState = (paramName: string, defaultValue?: string): TReturn => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const router = useRouter();

  const param = searchParams.get(paramName) as string;

  useEffect(() => {
    if (!param && defaultValue) {
      setParam(defaultValue);
    }
  }, []);

  const getParamUrl = (val: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!val) {
      current.delete(paramName);
    } else {
      current.set(paramName, val);
    }

    const url = `${pathname}?${current.toString()}`;

    return url;
  };

  const setParam = (val: string) => {
    const url = getParamUrl(val);

    router.replace(url);
  };

  return [param, setParam, getParamUrl];
};

export default useParamState;
