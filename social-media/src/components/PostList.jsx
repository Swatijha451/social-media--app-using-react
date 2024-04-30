import Post from "./Post"
import { useContext } from "react";
import {PostList as PostListData} from "../store/postlistStore";
import WelcomeMsg from "./WelcomeMsg";
import Loader from "./Loader";


const PostList=()=>{
    const {postList, loader}=useContext(PostListData);
return(
    <div className="mypostlist">
    {loader && <Loader></Loader>}
    {!loader && postList.length===0 && (<WelcomeMsg></WelcomeMsg>)}
    {!loader && postList.map( (post) => <Post
    key={post.id}
    mypost={post}></Post>)}
    </div>
);
}
export default PostList;