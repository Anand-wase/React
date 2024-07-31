import { useState, createContext, useReducer, useEffect } from "react";

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
  fetching : false,
  addPost : ()=>{},
  deletePost : ()=>{}
});
 
const postListReducer = (currPostList,action) => {
  let newPostList = currPostList;
  if (action.type==='ADD_POST')
    newPostList = [action.payload,...newPostList,];
  else if (action.type==='ADD_INITIAL_POSTS'){
    newPostList = action.payload.posts
  }
  else if (action.type==='DELETE_POST')
    newPostList = newPostList.filter(post=> post.id!==action.payload.id);
  return newPostList;
};

const PostlistProvider = ({children}) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer,[]);
  const [fetching, setFetching] = useState(false)
  const addPost = (userId,postTitle,postBody,reactions,tags)=>{
    console.log(userId,postTitle,postBody,reactions,tags);
    dispatchPostList({
      type : 'ADD_POST',
      payload : {
        id : Date.now(),
        title : postTitle,
        body : postBody,
        reactions : reactions,
        userId : userId,
        tags : tags
      }});
  };

  const addInitialPosts = (posts)=>{
    dispatchPostList({
      type : 'ADD_INITIAL_POSTS',
      payload : {
        posts : posts
      }});
  };

  const deletePost = (id) =>{
    dispatchPostList({
      type : 'DELETE_POST',
      payload : {
        id
      }
    });
  };

  useEffect(()=>{
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then(data =>{
      addInitialPosts(data.posts);
      setFetching(false);
      console.log(postlist)
  });
  return () => {
    controller.abort();
  }
  },[])

  return <PostListContext.Provider value={{
    postlist,
    addPost,
    fetching,
    deletePost
  }}>
    {children}
  </PostListContext.Provider>
};
export default PostlistProvider;
