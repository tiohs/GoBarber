import logoImg from "../assets/Logo.svg";

import styled from "./header.module.css";
export function Header() {
  return (
    <div className={styled.container}>
      <img src={logoImg} />
    </div>
  );
}
