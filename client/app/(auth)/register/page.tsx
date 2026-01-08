import RegisterForm from "@/app/(auth)/register/register-form";
import React from "react";

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold ml-4 text-center">Register</h1>
      <div className="flex justify-center items-center">
        <RegisterForm />
      </div>
    </div>
  );
}
