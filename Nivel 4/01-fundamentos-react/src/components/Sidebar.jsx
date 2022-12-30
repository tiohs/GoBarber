import styles from "./Sidebar.module.css";
import img from "../assets/bg.jpg";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img className={styles.cover} src={img} />
      <div className={styles.profile}>
        <strong>Hamilton Silva</strong>
        <span>Dev</span>
      </div>
      <footer>
        <a href="">Editar o ser Perfil</a>
      </footer>
    </div>
  );
}
