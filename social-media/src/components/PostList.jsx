import { useContext } from "react";
import Post from "./Post"
import {PostListContext} from '../store/post-list-store'
import WelcomeMesg from "./WelcomMesg";

const PostList = () => {
  const {postlist, addInitialPosts} = useContext(PostListContext);
const  handleGetPostList = () =>{
  fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(data =>{
  addInitialPosts(data.posts)
});
};

  return<>
  {postlist.length==0 ? <WelcomeMesg onGetPosClick ={handleGetPostList}/> : postlist.map((post)=><Post key={post.id} post={post}/>)}
  </>
};
export default PostList;