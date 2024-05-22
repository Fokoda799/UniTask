import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-50 rounded-lg drop-shadow-md px-12 py-24">
      <h1 className="text-main-purple text-center text-xl font-bold font-['Poppins'] leading-tight mb-12">
        Log in to Unitask
      </h1>
      <form className="flex flex-col space-y-4 m-6">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 w-80 my-5 mx-auto md:w-96 sm:w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 w-80 my-5 mx-auto md:w-96 sm:w-full"
        />
        <button className="w-52 h-16 bg-gray-50 rounded-xl p-2 shadow-md text-center mx-auto my-12">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
