import { Button, TextInput } from "@mantine/core";
import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center bg-mine-shaft-800 mx-2 sm:mx-6 md:mx-20 py-6 px-3 sm:px-6 md:px-10 rounded-xl mb-5">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-2xl sm:text-3xl md:text-4xl text-mine-shaft-100 font-semibold w-full md:w-2/5 mb-4 md:mb-0 text-center md:text-left leading-tight">
          Never Wants to Miss Any{" "}
          <span className="text-bright-sun-400">Job News?</span>
        </span>
        <div className="flex w-full md:w-[45%] items-center p-2 sm:p-4 md:p-5 justify-between bg-mine-shaft-700 rounded-xl overflow-hidden">
          <TextInput
            className="flex-1 px-2 sm:px-4 py-2 sm:py-3 text-mine-shaft-100 bg-transparent focus:outline-none"
            variant="unstyled"
            placeholder="Your@email.com"
          />
          <Button
            className="ml-2 text-mine-shaft-100"
            style={{ color: "#333333" }}
            color="bright-sun.4"
            variant="filled"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
