import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5"
    >
      {text}
    </button>
  );
};

export default Button;
