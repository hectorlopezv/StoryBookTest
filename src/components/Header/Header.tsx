import React from "react";

export interface HeaderProps {
  color: string;
  onClick: (color: string) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const handlerfor = () => {
    props.onClick(props.color);
  };
  return (
    <header onClick={handlerfor} style={{ color: props.color }}>
      Header Test
    </header>
  );
};

export default Header;
