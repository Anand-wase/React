import { useContext, useEffect, useState } from "react";
import Post from "./Post"
import {PostListContext} from '../store/post-list-store'
import WelcomeMesg from "./WelcomMesg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const {postlist, addInitialPosts} = useContext(PostListContext);
  const [fetching, setFetching] = useState(false)
  useEffect(()=>{
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then(data =>{
      addInitialPosts(data.posts);
      setFetching(false);
  });
  return () => {
    console.log('Cleaning up UseEffect.');
    controller.abort();
  }
  },[])

  return<>
  {fetching && <LoadingSpinner/>}
  {!fetching && postlist.length==0 ? <WelcomeMesg/> : postlist.map((post)=><Post key={post.id} post={post}/>)}
  </>
};
export default PostList;