"use client";
import { useState } from "react";
import { clientSessionToken } from "@/lib/http";

// AppProvider component to wrap the application
export default function AppProvider({
  children,
  initSessionToken,
}: {
  children: React.ReactNode;
  initSessionToken: string;
}) {
    //useState để khởi tạo giá trị sessionToken từ props, vì useState luôn chạy đàu tiên khi component được mount
    useState(() => {
        if (typeof window !== 'undefined') { // Chỉ chạy trên client side
      clientSessionToken.value = initSessionToken
    }
  });
  // You can add logic here to provide sessionToken or other global states
  return <>{children}</>;
}
