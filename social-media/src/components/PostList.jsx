import { useContext } from "react";
import Post from "./Post"
import {PostListContext} from '../store/post-list-store'
import WelcomeMesg from "./WelcomMesg";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const {postlist, fetching} = useContext(PostListContext);
  //const postList = useLoaderData();

  return<>
  {fetching && <LoadingSpinner/>}
  {!fetching && postlist.length==0 ? <WelcomeMesg/> : postlist.map((post)=><Post key={post.id} post={post}/>)}
  </>
};

export const postLoader =() =>{
  console.log("Data");
  return fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data =>{
    return data.posts;
    
});
}

export default PostList;