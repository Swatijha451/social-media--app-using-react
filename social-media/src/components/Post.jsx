import { useContext } from "react";
import { MdDelete } from "react-icons/md";


const Post=({post})=>{

    

return(
    <div className="card postCard" style={{width: "30rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
    <MdDelete /> 
  </span>
    <p className="card-text">{post.body}</p>
    
    {post.tags.map((tag)=> (
        <span class="badge text-bg-warning hashtags">{tag}</span>
    ))}
     <button type="button" className="btn btn-primary ">Post</button> 
     <div class="alert alert-success myAlert" role="alert">
        This post has been reacted by {post.reactions} people!
</div> 
  </div>
</div>
)
};
export default Post;