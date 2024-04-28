import Post from "./Post"
import { useContext, useEffect, useState } from "react";
import {PostList as PostListData} from "../store/postlistStore";
import WelcomeMsg from "./WelcomeMsg";
import Loader from "./Loader";


const PostList=()=>{
    const {postList,addInitialPost}=useContext(PostListData);
    const [loader, setLoader]=useState(false);
    useEffect(()=>{
        setLoader(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data=>{
            addInitialPost(data.posts)
            setLoader(false);
        });
        
    },[])


return(
    <div className="mypostlist">
    {loader && <Loader></Loader>}
    {!loader && postList.length===0 && (<WelcomeMsg></WelcomeMsg>)}
    {!loader && postList.map( (post) => <Post
    key={post.id}
    post={post}></Post>)}
    </div>
);
}
export default PostList;