import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  btnType?: "button" | "submit";
  style?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
