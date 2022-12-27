import { header } from "./header.module.css";
import logoIgnite from "../assets/Ignite.svg";
export function Header() {
  return (
    <header className={header}>
      <img src={logoIgnite} alt="Logo do Ignite" />
    </header>
  );
}
