/* eslint-disable @typescript-eslint/no-explicit-any */

import envConfig from "@/config";

type CustomOptions = Omit<RequestInit, "method"> & {
  baseUrl?: string | undefined;
};

class HttpError extends Error {
  status: number;
  payload: any;
  constructor(status: number, payload: any) {
    super("Http Error");
    this.status = status;
    this.payload = payload;
  }
}

const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options?: CustomOptions | undefined
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined;
  const baseHeaders = {
    "Content-Type": "application/json",
    Authorization: clientSessionToken.value ? `Bearer ${clientSessionToken.value}` : "",
  };
  //base url rỗng là gọi API đến next server
  const baseUrl =
    options?.baseUrl === undefined
      ? envConfig.NEXT_PUBLIC_API_ENDPOINT
      : options?.baseUrl;

  const fullUrl = url.startsWith("/")
    ? `${baseUrl}${url}`
    : `${baseUrl}/${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
    method,
    body,
  });
  const payload: Response = await res.json();
  const data = { payload, status: res.status };
  if (!res.ok) {
    throw new HttpError(res.status, payload);
  }
  //tự động cập nhật clientSessionToken khi đăng nhập, đăng ký, đăng xuất
  if(['/auth/login','/auth/register'].includes(url)){
    clientSessionToken.value = (payload as any).data.token;
  } else if(['/auth/logout'].includes(url)){
    clientSessionToken.value = '';
  }
  return data;
};

class SessionToken {
  private token = ''
  get value() {
    return this.token;
  }
  set value(token: string) {
    // Nếu gọi method này ở server thì sẽ bị lỗi
    if (typeof window === "undefined") {
      throw new Error("Cannot set token on server side");
    }
    this.token = token;
  }
}

export const clientSessionToken = new SessionToken(); // obj chỉ thực hiện lưu trữ token trong client side

const http = {
  get<Response>(
    url: string,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("GET", url, options);
  },
  post<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("POST", url, { ...options, body });
  },
  put<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("PUT", url, { ...options, body });
  },
  delete<Response>(
    url: string,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("DELETE", url, { ...options });
  },
};

export default http;
