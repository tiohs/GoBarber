import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import styles from "./Comment.module.css";
import imgAvatar from "../assets/dc.jpeg";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
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
            <button onClick={handleDeleteComment}>
              {" "}
              <Trash size={24} />{" "}
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
