import { useEffect, useRef, useState } from "react";

import { PostCard } from "./components/postCard/PostCard";
import "./App.css";
import { debounce } from "./utils/debounce";
import { Spinner } from "./components/postCard/spinner/Spinner";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  views: number;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
}

const limit = 10;

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [skip, setSkip] = useState<number>(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const postCount = useRef<number | null>(null);
  const totalPostCount = useRef<number | null>(null);

  useEffect(() => {
    fetchPosts();
  }, [skip]);

  useEffect(() => {
    if (loading) {
      setSkip((prev) => prev + 1);
    }
  }, [loading]);

  const fetchPosts = async () => {
    const response = await fetch(
      `https://dummyjson.com/posts?limit=${limit}&skip=${skip * limit}`
    );

    const jsonResponse = await response.json();

    const updatedPosts = [...posts, ...jsonResponse.posts];

    postCount.current = updatedPosts.length;
    totalPostCount.current = jsonResponse.total;
    setPosts(updatedPosts);
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 < window.scrollY + window.innerHeight &&
      postCount.current! < totalPostCount.current!
    ) {
      setLoading(true);
    }
  };

  window.addEventListener("scroll", debounce(handleScroll, 500));

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          likes={post.reactions.likes}
          dislikes={post.reactions.dislikes}
          tags={post.tags}
          views={post.views}
        />
      ))}
      {loading && <Spinner />}
    </div>
  );
}

export default App;
