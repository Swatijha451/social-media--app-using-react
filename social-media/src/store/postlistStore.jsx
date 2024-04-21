import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT={

    postList:[],
    addPost:()=>{},
    deltePost:()=>{},
}

 export const PostList=createContext(DEFAULT_CONTEXT);

const postListReducer=(currPostList,action)=>{
    return currPostList;
}



const PostListProvider=({children})=>{

    const [postList,dispatchpostList]=useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost=()=>{
    
    };
    
    const deletePost=()=>{
    
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
