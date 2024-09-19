import { checkForErrorType } from "@/core/lib/helper";
import { TError } from "./definations";

export async function getData<T>({
  url,
  method,
  body,
  customHeaders,
  errorMessage,
  signal,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  customHeaders?: HeadersInit;
  errorMessage: string;
  signal?: AbortSignal;
}): Promise<T | TError> {
  const headersInstance = new Headers();
  headersInstance.append("x-guest", "error");
  headersInstance.append("Content-Type", "application/json");
  if (typeof window !== "undefined") {
    const allHeaders = document.cookie;
    headersInstance.append("Cookie", allHeaders);
  }

  try {
    const response = await fetch(url, {
      method,
      headers: {
        ...headersInstance,
        ...customHeaders,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal,
    });

    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      const errorData: TError = await response.json();
      return errorData;
    }

    const data = await response.json();

    if (checkForErrorType("code", data) && checkForErrorType("error", data)) {
      return data as TError;
    }

    return data as T;
  } catch (error) {
    console.error("Network error:", error);
    return {
      status: 500,
      error: errorMessage,
    } as TError;
  }
}
