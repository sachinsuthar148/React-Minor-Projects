import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/Post-list-store";
import { useContext } from "react";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(post.id);
            }}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        <div className="alert alert-primary" role="alert">
          This is post is liked by {post.reactions} users.
        </div>

        {/* {post.tags.map((tag) => (
          
          <span className="badge text-bg-primary m-1" key={tag}>
            {tag}
          </span>
        ))} */}

        {post.tags.map((tag) => (
            <span className="badge text-bg-primary m-1" key={tag}>
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};
export default Post;
