import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <h1 className="text-3xl sm:text-4xl font-bold text-[#5a0a0a] tracking-wide">
      {text1} <span className="text-[#c0823b]">{text2}</span>
    </h1>
  );
};

export default Title;
