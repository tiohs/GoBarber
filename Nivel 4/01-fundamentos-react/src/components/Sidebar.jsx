import styles from "./Sidebar.module.css";
import img from "../assets/bg.jpg";
import imgAvatar from "../assets/dc.jpeg";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img className={styles.cover} src={img} />
      <div className={styles.profile}>
        <img src={imgAvatar} className={styles.avatar} />
        <strong>Hamilton Silva</strong>
        <span>Dev</span>
      </div>
      <footer>
        <a href="">Editar o ser Perfil</a>
      </footer>
    </div>
  );
}
