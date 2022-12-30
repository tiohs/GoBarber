import styles from "./Post.module.css";
import imgAvatar from "../assets/dc.jpeg";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={imgAvatar} />
          <div className={styles.authorInfo}>
            <strong>Hamilton Silva</strong>
            <span>Dev</span>
          </div>
        </div>
        <time title="11 de Maio as 08:13h " dateTime="2022-05-11 04:12:12">
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>Estou a criar um projecto com a rockeseat </p>
        <a href="">#Estudar</a> <a href="">#Go</a> <a href="">#uniTenda</a>{" "}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário "></textarea>
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  );
}
