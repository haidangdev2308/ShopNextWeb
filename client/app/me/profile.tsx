"use client";

import accountApiRequests from "@/apiRequests/account";
import { useAppContext } from "@/app/AppProvider";
import { useEffect } from "react";

export default function Profile() {
  const { sessionToken } = useAppContext();
  useEffect(() => {
    const fetchRequest = async () => {
      const response = await accountApiRequests.me(sessionToken || "");
    };

    fetchRequest();
  }, [sessionToken]);
  return <div>PROFILE</div>;
}
