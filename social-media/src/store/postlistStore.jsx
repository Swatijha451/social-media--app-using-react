import { createContext, useReducer } from "react";

export const PostList=createContext({

    postList:[],
    addPost:()=>{},
    deltePost:()=>{},
});


const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="DELETE_POST"){
        newPostList = currPostList.filter((post)=>post.id !==action.payload.postId);

    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList]
    }
    return newPostList;
}



const PostListProvider=({children})=>{

    const [postList,dispatchpostList]=useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost=(userID,title,content,reactions,tags)=>{
    dispatchpostList({
        type:"ADD_POST",
        payload:{
            id:Date.now,
            title:title,
            body:content,
            userId:userID,
            reactions:reactions,
            tags:tags
        },
    })
    };
    
    const deletePost=(postId)=>{
        // console.log(`deletePost called for${postId}`)
    dispatchpostList({
            type:"DELETE_POST",
            payload:{
                postId:postId,
            },
        })
    };

    return <PostList.Provider 
    value={{
        postList:postList,
        addPost:addPost,
        deletePost:deletePost,

    }}>
        {children}
    </PostList.Provider>

};

const DEFAULT_POST_LIST=[
    {
    id:"1",
    title:"Going to kolkata",
    body:"Hi friends, I am oing to Kolkata",
    reactions:0,
    userId:"swati_jha",
    tags:["vacations","trip","adventure"],
},
{
    id:"2",
    title:"Going to kolkata",
    body:"Hi friends, I am oing to Kolkata",
    reactions:0,
    userId:"swati_jha",
    tags:["vacations","trip","adventure"],
},
{
    id:"3",
    title:"Going to kolkata",
    body:"Hi friends, I am oing to Kolkata",
    reactions:0,
    userId:"swati_jha",
    tags:["vacations","trip"],
},
];


export default PostListProvider;
