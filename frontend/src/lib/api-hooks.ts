import { useState } from "react";
import { FetchState, PostData } from "../types/post";
import axios from 'axios';
export function useGetPosts(){
    const [fetchState,setFetchState]=useState(FetchState.DEFAULT);

    const [posts,setPosts]=useState<Array<PostData>>([]);

    const getPosts= async() =>{
        try{
            console.log("jere");
            setFetchState(FetchState.LOADING);
            const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
            const resData=res.data as Array<PostData>;
            console.log(resData);
            setPosts(resData);
            setFetchState(FetchState.SUCCESS);
        }catch(err){
            setFetchState(FetchState.ERROR);
        }
    }
    return [posts,fetchState,getPosts] as const;
}