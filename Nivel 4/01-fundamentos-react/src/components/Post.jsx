import styles from "./Post.module.css";
import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import pt from "date-fns/locale/pt";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana, hein ?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: pt,
  });

  const publishedDateRelativeTNow = formatDistanceToNow(publishedAt, {
    locale: pt,
    addSuffix: true,
  });

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }
  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório !");
  }
  function handleCreateNewComment() {
    event.preventDefault();
    setComments([newCommentText, ...comments]);
    setNewCommentText(" ");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }
  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeTNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((item) => {
          return (
            <Comment
              key={item}
              content={item}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
