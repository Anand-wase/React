import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => { 
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const {addPost} = useContext(PostListContext)
  const navigate = useNavigate();
  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value='';
    postTitleElement.current.value='';
    postBodyElement.current.value='';
    reactionsElement.current.value='';
    tagsElement.current.value='';
    addPost(userId,postTitle,postBody,reactions,tags
    );
    navigate('/');
  };

  return <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your User ID here</label>
    <input type="text" className="form-control" ref={userIdElement} id="userID" placeholder="Your user Id"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" ref={postTitleElement} id="title" placeholder="How are you feeling today"/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea rows='4' type="text" className="form-control" ref={postBodyElement} id="body" placeholder="Tell us more about it"/>
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">No of Reactions</label>
    <input type="text" className="form-control" ref={reactionsElement} id="reactions" placeholder="How many people reacted to this Post"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Your hashtags here</label>
    <input type="text" className="form-control" ref={tagsElement} id="title" placeholder="please enter tags using space"/>
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
</form>
};
export default CreatePost;