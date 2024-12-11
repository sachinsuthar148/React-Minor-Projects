import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts:()=>{}

});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (item) => item.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
    // console.log(newPostList);
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (post) => {
    console.log("Add function is called")
    const AddDispatchList = {
      type: "ADD_POST",
      payload: {
        post
      },
    };
    dispatchPostList(AddDispatchList);
    console.log("Add function is dispatched")
  };

  const addInitialPosts = (posts) => {
    const AddDispatchList = {
      type: "ADD_INITIAL_POST",
      payload: {
        posts
      },
    };
    dispatchPostList(AddDispatchList);
  };

  const deletePost = useCallback((postId) => {
    const DeletedDispatchList = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPostList(DeletedDispatchList);
  },[dispatchPostList])


  return (
    <PostList.Provider value={{ postList, addPost, deletePost,addInitialPosts }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
