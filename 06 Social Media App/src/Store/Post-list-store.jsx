import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (item) => item.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
    console.log(newPostList);
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, title, body, reaction, hashTag) => {
    const AddDispatchList = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reaction,
        userId: userId,
        tags: hashTag,
      },
    };
    dispatchPostList(AddDispatchList);
  };

  const deletePost = (postId) => {
    const DeletedDispatchList = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPostList(DeletedDispatchList);
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends me mumbai aaya tha faisu bhai se milne ...lekin faisu bhai to mile nhi but..once...",
    reactions: 2,
    userId: "user-9",
    tags: ["faisubhai", "mumbai", "enjoy"],
  },
  {
    id: "2",
    title: "Pass ho gya mere bhai",
    body: "are yaar me to soch rha tha ki mere to back aayegi...lekin me to galti se pass ho gya... thank god... bhagwan ne bacha liya",
    reactions: 12,
    userId: "user-10",
    tags: ["pdhai", "exam", "hardwork"],
  },
];

export default PostListProvider;
