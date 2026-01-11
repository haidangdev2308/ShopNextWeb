"use client";

import accountApiRequests from "@/apiRequests/account";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    const fetchRequest = async () => {
      const response = await accountApiRequests.meClient();
    };

    fetchRequest();
  }, []);
  return <div>PROFILE</div>;
}
