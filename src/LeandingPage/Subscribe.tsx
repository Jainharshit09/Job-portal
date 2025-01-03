import { Button, TextInput } from "@mantine/core";
import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-20 flex items-center bg-mine-shaft-800  mx-20 py-6 px-10 rounded-xl">
      <div className="text-lg w-full font-semibold text-mine-shaft-100 flex items-center justify-between leading-tight">
        <span className="text-4xl text-mine-shaft-100 w-2/5 bs-mx:w-4/5 ">
          Never Wants to Miss Any <span className="text-bright-sun-400">Job News?</span>
        </span>
        <div className="flex w-[45%] items-center p-5 justify-between bg-mine-shaft-700 rounded-xl overflow-hidden">
          <TextInput
            className=" px-4 py-3 text-mine-shaft-100 bg-transparent focus:outline-none"
            variant="unstyled"
            placeholder="Your@email.com"
          />
          <Button className=" text-mine-shaft-100" style={{ color:'#333333' }}  color="bright-sun.4"  variant="filled">
            Subscribe
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
