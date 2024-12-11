import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <>
    <div className="post-list">
      {postList.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      </div>
    </>
  );
};
export default PostList;
