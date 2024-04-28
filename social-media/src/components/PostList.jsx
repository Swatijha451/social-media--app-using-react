import Post from "./Post"
import { useContext } from "react";
import {PostList as PostListData} from "../store/postlistStore";
import WelcomeMsg from "./WelcomeMsg";


const PostList=()=>{
    const {postList,addInitialPost}=useContext(PostListData);

    const handleGetPostsClick=()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data=>{
            addInitialPost(data.posts)
        });
    }

return(
    <div className="mypostlist">
    {postList.length===0 && (<WelcomeMsg onGetPostsClick={handleGetPostsClick}></WelcomeMsg>)}
    {postList.map( (post) => <Post
    key={post.id}
    post={post}></Post>)}
    </div>
);
}
export default PostList;