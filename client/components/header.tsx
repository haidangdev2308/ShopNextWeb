import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="">
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
      <ModeToggle />
    </div>
  );
}
