import { TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div className="px-12 py-24 my-5 rounded-lg bg-gray-50 drop-shadow-md">
      <h1 className="text-main-purple text-center text-xl font-bold font-['Poppins'] leading-tight mb-12">
        Log in to Unitask
      </h1>
      <div className="text-center text-neutral-800 text-base font-light font-['Poppins'] leading-snug tracking-tight">
        Welcome back!
      </div>
      <form className="flex flex-col m-6 space-y-4">
        <TextField
          label="Email"
          variant="standard"
          type="email"
          className="p-2 mx-auto my-5 border border-gray-300 w-80 md:w-96 sm:w-full"
        />

        <TextField
          label="Password"
          variant="standard"
          type="password"
          className="p-2 mx-auto my-5 border border-gray-300 w-80 md:w-96 sm:w-full"
        />

        <button className="h-16 p-2 mx-auto my-12 text-center shadow-md w-52 bg-gray-50 rounded-xl text-black text-md font-medium font-['Poppins']">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
