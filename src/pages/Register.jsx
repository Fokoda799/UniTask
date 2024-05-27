import { TextField } from "@mui/material";

const Register = () => {
  return (
    <div className="p-10 rounded-lg bg-gray-50 drop-shadow-md m-auto border">
      <h1 className="text-main-purple text-center text-xl font-bold font-['Poppins'] leading-tight">
        Register for Unitask
      </h1>
      <div className="text-center text-neutral-800 text-base font-light font-['Poppins'] leading-snug tracking-tight">
        Create your account
      </div>
      <form className="flex flex-col justify-between m-auto p-5 space-y-4">
        <div className="flex flex-col justify-between m-auto p-5 space-y-6">
          <TextField
            label="Full Name"
            variant="standard"
            type="text"
            className="bg-[#fdfdfd] rounded-[10px] w-80 md:w-96 sm:w-full focus:text-main-purple"
          />
          <TextField
            label="Email"
            variant="standard"
            type="email"
            className="bg-[#fdfdfd] rounded-[10px] w-80 md:w-96 sm:w-full focus:text-main-purple"
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            className="bg-[#fdfdfd] rounded-[10px] w-80 md:w-96 sm:w-full focus:text-main-purple"
          />
          <TextField
            label="Confirm Password"
            variant="standard"
            type="password"
            className="bg-[#fdfdfd] rounded-[10px] w-80 md:w-96 sm:w-full focus:text-main-purple"
          />
        </div>

        <button className="h-16 p-2 mx-auto my-12 text-center shadow-md w-52 bg-gray-50 rounded-xl text-black text-md font-medium font-['Poppins']">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

