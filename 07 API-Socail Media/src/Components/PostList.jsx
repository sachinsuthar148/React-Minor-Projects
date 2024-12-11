import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
// import { useState } from "react";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  //  const [dataFatched, setDataFateched]=useState(false)
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
  
    const controller = new AbortController();
    const signal  = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
      return ()=>{
        console.log("cleaning up");
        controller.abort();
      }
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      <div className="post-list">
        {postList.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};
export default PostList;
