import { useContext } from "react";
import Post from "./Post"
import {PostListContext} from '../store/post-list-store'

const PostList = () => {
  const {postlist} = useContext(PostListContext);
  return<>
  {postlist.map((post)=><Post key={post.id} post={post}/>)}
  </>
};
export default PostList;