// import { PencilLine } from 'phosphor-react';

import styles from "./Sidebar.module.css";
import img from "../assets/bg.jpg";
import imgAvatar from "../assets/dc.jpeg";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img className={styles.cover} src={img} />
      <div className={styles.profile}>
        <Avatar src={imgAvatar} />
        <strong>Hamilton Silva</strong>
        <span>Dev</span>
      </div>
      <footer>
        {/* <PencilLine size={20}/> */}
        <a href="">Editar o seu Perfil</a>
      </footer>
    </div>
  );
}
