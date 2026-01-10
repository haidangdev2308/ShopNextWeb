import envConfig from "@/config";
import React from "react";
import { cookies } from "next/headers";
import Profile from "@/app/me/profile";
//server component có thể dùng cookies từ next/headers
export default async function MeProfile() {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");
  const response = await fetch(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken?.value}`, //nếu là cookie mode thì chỉ gửi cookie = token thôi
      },
    }
  ).then(async (res) => {
    const payload = await res.json();
    
    const data = { payload, status: res.status };
    if (!res.ok) {
      throw data;
    }
    return data;
  });

  return (
    <div>
      <h1>Your Profile</h1>
      <div>{response.payload.data.name}</div>
      <div><Profile /></div>
    </div>
  );
}
