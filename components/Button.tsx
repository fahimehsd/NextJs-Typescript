"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({ title, style, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${style}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
