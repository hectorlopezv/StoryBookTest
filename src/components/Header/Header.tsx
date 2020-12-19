import React from "react";
import "./Header.css";
import logo from "./pokemon.jpg";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
export interface HeaderProps {
  color: string;
  title?: string;
  onClick: (color: string) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const handlerfor = () => {
    props.onClick(props.color);
  };
  return (
    <div className="header" onClick={handlerfor} style={{ color: props.color }}>
      <div className="header__left">
        <img src={logo} alt="Pokemon Image" />
      </div>
      {props.title && <h2>{props.title}</h2>}

      <div className="header__right">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>

      <div className="header__right--mobile">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
