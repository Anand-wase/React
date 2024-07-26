import { createContext, useReducer } from "react";

const postlist1 = [{
  id : '1',
  title : 'Going to Trip',
  body : 'Hi Friends, I am going to Mumbai for my vacations.Hope to enjoy a lot, Peace out.',
  reactions : 2,
  userId : 'user-9',
  tags : ['vacation', 'Mumbai', 'Enjoying']
},{
  id : '2',
  title : 'Pass ho bhai',
  body : 'Hi Friends, I am going to Mumbai for my vacations.Hope to enjoy a lot, Peace out.',
  reactions : 16,
  userId : 'user-10',
  tags : ['Graduation', 'Unbelivable']
}];
export const PostListContext = createContext({
  postlist : postlist1,
  addPost : ()=>{},
  deletePost : ()=>{}
});
 
const postListReducer = (currPostList,action) => {
  let newPostList = currPostList;
  if (action.type==='ADD_POST')
    newPostList = [action.payload,...newPostList,];
  else if (action.type==='DELETE_POST')
    newPostList = newPostList.filter(post=> post.id!==action.payload.id);
  return newPostList;
};
const PostlistProvider = ({children}) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer,postlist1);

  const addPost = (userId,postTitle,postBody,reactions,tags)=>{
    console.log(userId,postTitle,postBody,reactions,tags);
    const newAction ={
      type : 'ADD_POST',
      payload : {
        id : Date.now(),
        title : postTitle,
        body : postBody,
        reactions : reactions,
        userId : userId,
        tags : tags
      }
      }
    dispatchPostList(newAction);

  };
  const deletePost = (id) =>{
    const newAction ={
      type : 'DELETE_POST',
      payload : {
        id
      }
    };
    dispatchPostList(newAction);
  };
  return <PostListContext.Provider value={{
    postlist,
    addPost,
    deletePost
  }}>
    {children}
  </PostListContext.Provider>
};
export default PostlistProvider;
