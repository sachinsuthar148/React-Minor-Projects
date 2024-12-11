import { useRef } from "react";
import { PostList } from "../Store/Post-list-store";
import { useContext } from "react";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef("");
  const titleElement = useRef("");
  const bodyElement = useRef("");
  const reactionsElement = useRef("");
  const hashTagsElement = useRef("");

  const handleAddPost = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionsElement.current.value;
    const hashTag = hashTagsElement.current.value.split(" ");

    // userIdElement.current.value = "";
    // titleElement.current.value = "";
    // bodyElement.current.value = "";
    // reactionsElement.current.value = "";
    // hashTagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        reactions: reaction,
        userId: userId,
        tags: hashTag,
      }),
    })
      .then((res) => res.json())
      .then((resObj) => {
        addPost(resObj)
        console.log(resObj);
      }
        );
  };

  return (
    <form onSubmit={handleAddPost} className="form-container">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          title{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={titleElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          body
        </label>
        <textarea
          rows={4}
          className="form-control"
          id="body"
          ref={bodyElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="HashTags" className="form-label">
          HashTags
        </label>
        <input
          type="text"
          className="form-control"
          id="HashTags"
          ref={hashTagsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
