/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { use } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema";
import envConfig from "@/config";
import { toast } from "sonner";
import { useAppContext } from "@/app/AppProvider";

export default function LoginForm() {
  const {setSessionToken} = useAppContext();
  // 1. Define your form.
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: LoginBodyType) {
    try {
      const response = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      ).then(async (res) => {
        const payload = await res.json();
        const data = { payload, status: res.status };
        if (!res.ok) {
          throw data;
        }
        return data;
      });
      toast.success("Đăng nhập thành công");

      const resultFromNextServer = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      }).then(async (res) => {
        const payload = await res.json();
        const data = { payload, status: res.status };
        if (!res.ok) {
          throw data;
        }
        return data;
      });
      setSessionToken(resultFromNextServer.payload.data.token);

    } catch (error: any) {
      const errors = error.payload.errors as {
        field: string;
        message: string;
      };
      const status = error.status as number;
      if (status === 422 && Array.isArray(errors)) {
        errors.forEach((err) => {
          form.setError(err.field as keyof LoginBodyType, {
            type: "server",
            message: err.message,
          });
        });
      } else {
        toast.error(error.message || "Đã có lỗi xảy ra, vui lòng thử lại sau");
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 min-w-100"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-6! w-full">
          Login
        </Button>
      </form>
    </Form>
  );
}
