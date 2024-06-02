import { TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="p-10 rounded-lg bg-gray-50 drop-shadow-md m-auto border">
      <h1 className="text-purple-900/70 text-center text-xl font-bold font-['Poppins'] leading-tight">
        Log in to Unitask
      </h1>
      <div className="text-center text-neutral-800 text-base font-light font-['Poppins'] leading-snug tracking-tight">
        Welcome back!
      </div>
      <form className="flex flex-col justify-between m-auto p-5 space-y-4">
        <div className="flex flex-col justify-between m-auto p-5 space-y-6">
          <TextField
            label="Email"
            variant="standard"
            type="email"
            className="bg-[#fdfdfd] rounded-[10px] w-80 md:w-96 sm:w-full focus:border-purple-900/70"
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            className="bg-[#fdfdfd] rounded-[10px] w-80 md:w-96 sm:w-full focus:border-purple-900/70"
          />
        </div>

        <button className="h-16 p-2 mx-auto my-12 text-center shadow-md w-52 bg-gray-50 rounded-xl text-black text-md font-medium font-['Poppins']">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
