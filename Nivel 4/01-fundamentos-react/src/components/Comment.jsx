// import { Trash, ThumbsUp } from 'phosphor-react';
import styles from "./Comment.module.css";
import imgAvatar from "../assets/dc.jpeg";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={imgAvatar} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hamilton Silva</strong>
              <time
                title="11 de Maio as 08:13h "
                dateTime="2022-05-11 04:12:12"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button>a{/* <Trash size={20}> */}</button>
          </header>
          <p>Muito bom devon, parabéns</p>
        </div>
        <footer>
          <button>
            {/* <ThumbsUp size={24}> */} Aplaudir <span> 100</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
