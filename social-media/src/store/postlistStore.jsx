import { createContext, useCallback, useReducer, useState, useEffect } from "react";

export const PostList=createContext({

    postList:[],
    loader:false,
    addPost:()=>{},
    deltePost:()=>{},
});


const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="DELETE_POST"){
        newPostList = currPostList.filter((post)=>post.id !==action.payload.postId);

    }
    else if(action.type==="ADD_INITIAL_POSTS"){
        newPostList=action.payload.posts;
    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList]
    }

    return newPostList;
}



const PostListProvider=({children})=>{

    const [postList,dispatchpostList]=useReducer(postListReducer,[]);
    const [loader, setLoader]=useState(false);

    const addPost=(mypost)=>{
    dispatchpostList({
        type:"ADD_POST",
        payload:mypost
    })
    };

    const addInitialPost=(posts)=>{
        dispatchpostList({
            type:"ADD_INITIAL_POSTS",
            payload:{
                posts:posts,
            },
        })
        };
    
    const deletePost=useCallback((postId)=>{
        // console.log(`deletePost called for${postId}`)
    dispatchpostList({
            type:"DELETE_POST",
            payload:{
                postId:postId,
            },
        })
    },[dispatchpostList]);

    
    useEffect(()=>{
        setLoader(true);
        const controller= new AbortController();
        const signal=controller.signal;
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(data=>{
            addInitialPost(data.posts)
            setLoader(false);
        });
        return ()=>{
            controller.abort();
        }
        
    },[]);

    return <PostList.Provider 
    value={{
        postList:postList,
        addPost:addPost,
        loader:loader,
        deletePost:deletePost,

    }}>
        {children}
    </PostList.Provider>

};

export default PostListProvider;
