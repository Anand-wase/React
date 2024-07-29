import { MdOutlineDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import { FcLike, FcDislike } from "react-icons/fc";

const Post = ({post}) => {
  const {deletePost} = useContext(PostListContext);
  return <div className="card post-card" style={{width: '30rem'}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
    <MdOutlineDeleteOutline/>
    <span className="visually-hidden">unread messages</span>
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=><span className="badge text-bg-primary hashtag" key={tag}>{tag}</span>)}
    <div className="alert alert-success reactions" role="alert"><FcLike /> : {post.reactions.likes} <br/><FcDislike /> : {post.reactions.dislikes}</div>
  </div>
</div>
};
export default Post;