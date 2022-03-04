import { useEffect, useState } from "react";
import { FetchState, PostData } from "../types/post";
import { IFormInput } from "../pages/CreateEvent";
import axios from "axios";
export function useGetPosts(){

    const [fetchState,setFetchState]=useState(FetchState.DEFAULT);

    const [posts,setPosts]=useState<Array<PostData>>([]);

    const uploadPosts= async(data:IFormInput) =>{
        try{
            
            setFetchState(FetchState.LOADING);
            // const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ location: data.location, interest: data.interest, groupName: data.groupName, description: data.description })
            };
            const res=await fetch('http://localhost:9010/api/createEvent', requestOptions);
            if(!res.ok) throw new Error(res.statusText);
            else return res.json();
        
            // const resData=res.data as Array<PostData>;
            // console.log(res);
            // setPosts(resData);
            getPosts()
            setFetchState(FetchState.SUCCESS);
        }catch(err){
            setFetchState(FetchState.ERROR);
        }
    }

    const getPosts= async()=>{
        try{
            console.log("here");
            const res=await axios.get('http://localhost:9010/api/getEvents')
            const resData=res.data as Array<PostData>;
            console.log(resData);
            setPosts(resData)
            console.log(posts)
        }catch(err){
            setFetchState(FetchState.ERROR);

        }
    }
    return [posts,fetchState,uploadPosts,getPosts] as const;
}