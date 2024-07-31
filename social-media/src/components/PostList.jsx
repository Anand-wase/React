import { useContext } from "react";
import Post from "./Post"
import {PostListContext} from '../store/post-list-store'
import WelcomeMesg from "./WelcomMesg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const {postlist, fetching} = useContext(PostListContext);

  return<>
  {fetching && <LoadingSpinner/>}
  {!fetching && postlist.length==0 ? <WelcomeMesg/> : postlist.map((post)=><Post key={post.id} post={post}/>)}
  </>
};
export default PostList;