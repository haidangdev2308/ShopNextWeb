import { cookies } from "next/headers";
import Profile from "@/app/me/profile";
import accountApiRequests from "@/apiRequests/account";
//server component có thể dùng cookies từ next/headers
export default async function MeProfile() {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");
  const response = await accountApiRequests.me(sessionToken?.value || "");
  const payload = response.payload as { data: { name: string } };

  return (
    <div>
      <h1>Your Profile</h1>
      <div>{payload.data.name}</div>
      <div><Profile /></div>
    </div>
  );
}
