import { Header } from "./components/Header";
import { wrapper } from "./App.module.css";
import { Post } from "./components/Post";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tiohs.png",
      name: "Hamilton Silva",
      role: "CEO @Unituenda",
    },
    content: [
      { type: "paragraph", content: "Fala galera " },
      { type: "paragraph", content: "Como ser um bom programador " },
      {
        type: "paragraph",
        content: "Para ser um bom programador devemos saber criar ",
      },
    ],
    publishedAt: new Date("2023-01-11 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTE @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera " },
      { type: "paragraph", content: "Como ser um bom programador " },
      {
        type: "paragraph",
        content: "Para ser um bom programador devemos saber criar ",
      },
    ],
    publishedAt: new Date("2023-01-10 20:00:00"),
  },
];
function App() {
  return (
    <div>
      <Header />
      <div className={wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export { App };
