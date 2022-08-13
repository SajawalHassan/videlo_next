import React, { useState } from "react";
import InputField from "../components/InputField";
import joi from "@hapi/joi";

import {
  LockClosedIcon,
  MailIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

export default function login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkForUsernameErrors = () => {
    const schema = joi.object({
      username: joi.string().required().min(3).max(20),
    });

    const { error } = schema.validate({ username });

    setError(error?.details[0]?.message);
  };

  const checkForEmailErrors = () => {
    const schema = joi.object({
      email: joi.string().required().email({ tlds: false }),
    });

    const { error } = schema.validate({ email });

    setError(error?.details[0]?.message);
  };

  const checkForPasswordErrors = () => {
    const schema = joi.object({
      password: joi.string().required().min(8),
    });

    const { error } = schema.validate({ password });

    setError(error?.details[0]?.message);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-screen bg-background-color text-white absolute top-0">
      <div className="p-2 m-2 border-2 border-blue-400 flex justify-between rounded-md items-center">
        {/* Using normal img tag because next/image renders in low quality */}
        <img src="/videlo.png" alt="logo" loading="lazy" />

        <h1 className="text-xl text-white font-black">Register Page</h1>
      </div>

      <div className="flex items-center h-[90vh]">
        <form className="mx-2 space-y-4 bg-[#333333c4] p-4 w-full justify-center flex flex-col items-center rounded-md">
          <InputField
            type="username"
            placeholder="Username"
            value={username}
            setValue={setUsername}
            Icon={UserIcon}
            onBlur={() => checkForUsernameErrors()}
          />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            setValue={setEmail}
            Icon={MailIcon}
            onBlur={() => checkForEmailErrors()}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
            Icon={LockClosedIcon}
            onBlur={() => checkForPasswordErrors()}
          />

          {error && (
            <p className="text-white text-sm font-bold rounded-md bg-red-500 p-2 mx-auto text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="capitalize font-bold bg-[#52DCD4] p-2 rounded-md"
            onClick={(e) => handleOnClick(e)}
          >
            Create account
          </button>
          <p className="text-blue-500 hover:underline text-xs">
            <Link href="/login">Already have an account?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
