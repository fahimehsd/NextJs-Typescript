"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({ title, btnType, style, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${style}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
