/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import type { ReactNode } from "react";
import React from "react";
import md5 from "md5";

export default function Signup(): ReactNode {
  const onSubmit = async (e: any): Promise<any> => {
    e.preventDefault();
    const name = e.target[0].value as string;
    const country = e.target[1].value as string;
    const username = e.target[2].value as string;
    const password = e.target[3].value as string;
    const data = {
      name,
      country,
      username,
      password: md5(password),
    };
    await fetch(`${process.env?.["NEXT_PUBLIC_API_URL"]}/auth/sign-up`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <form name="signup" onSubmit={onSubmit}>
        <li>
          <ol>
            <label htmlFor="name">name</label>
            <input id="name" required type="text" />
          </ol>

          <ol>
            <label htmlFor="country">country</label>
            <input id="country" required type="text" />
          </ol>

          <ol>
            <label htmlFor="username">username</label>
            <input id="username" required type="text" />
          </ol>

          <ol>
            <label htmlFor="password">password</label>
            <input id="password" required type="text" />
          </ol>
        </li>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
