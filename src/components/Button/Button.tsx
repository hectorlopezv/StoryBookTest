import React from "react";

export interface ButtonProps {
  color: string;
  onClick: (color: string) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { color, onClick } = props;

  const handlerClick = (event: React.MouseEvent) => {
    onClick(color);
  };
  return (
    <button style={{ color }} onClick={handlerClick}>
      color the button
    </button>
  );
};

export default Button;
