import Post from "./Post"
import { useContext } from "react";
import {PostList as PostListData} from "../store/postlistStore";


const PostList=()=>{
    const {postList}=useContext(PostListData);

return(
    <div className="postlist">
    {postList.map( (post) => <Post
    key={post.id}
    post={post}></Post>)}
    </div>
);
}
export default PostList;