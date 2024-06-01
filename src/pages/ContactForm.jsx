import React from 'react';
import { TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <div className="p-10 rounded-lg bg-gray-50 drop-shadow-md m-auto border">
      <h1 className="text-purple-900/70 text-center text-xl font-bold  leading-tight">
        Contact Us
      </h1>
      <div className="text-center text-neutral-800 text-base font-light  leading-snug tracking-tight">
        We would love to hear from you!
      </div>
      <form className="flex flex-col justify-between m-auto p-5 space-y-4">
        <div className="flex flex-col justify-between m-auto p-5 space-y-6">
          <TextField
            label="Name"
            variant="standard"
            type="text"
            className="bg-[#fdfdfd] rounded-[10px] w-80 md:w-96 sm:w-full focus:text-purple-900/70"
          />
          <TextField
            label="Email"
            variant="standard"
            type="email"
            className="bg-[#fdfdfd] rounded-[10px] w-80 md:w-96 sm:w-full focus:text-purple-900/70"
          />
          <TextField
            label="Message"
            variant="standard"
            type="text"
            multiline
            rows={4}
            className="bg-[#fdfdfd] rounded-[10px] w-80 md:w-96 sm:w-full focus:text-purple-900/70"
          />
        </div>

        <button className="h-16 p-2 mx-auto my-12 text-center shadow-md w-52 bg-gray-50 rounded-xl text-black text-md font-medium">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;