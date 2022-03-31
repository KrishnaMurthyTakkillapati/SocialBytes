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
            var body = JSON.stringify({ Location: data.Location, Interests: data.Interests, Name: data.Name, Description: data.Description })
            // const requestOptions = {
            //     method: 'POST',
            //     // headers: { 'Content-Type': '*' },
            //     body: JSON.stringify({ location: data.location, interest: data.interest, groupName: data.groupName, description: data.description })
            // };
            const res=await axios.post('http://localhost:9010/api/createEvent', body);
            if(res.status != 200) throw new Error(res.statusText);
            else return res;
        
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
            setFetchState(FetchState.LOADING);
            console.log("here");
            const res=await axios.get('http://localhost:9010/api/getEvents')
            const resData=res.data as Array<PostData>;
            console.log(resData);
            setPosts(resData);
            console.log(posts);
            setFetchState(FetchState.SUCCESS);
        }catch(err){
            setFetchState(FetchState.ERROR);
        }
    }

    const getPostsById= async(id:number)=>{
        try{
            setFetchState(FetchState.LOADING);
            console.log("here id");
            const res=await axios.get('http://localhost:9010/api/getEvents?ID='+id)
            const resData=res.data as Array<PostData>;
            console.log(resData);
            setPosts(resData);
            console.log(posts);
            setFetchState(FetchState.SUCCESS);
        }catch(err){
            setFetchState(FetchState.ERROR);
        }
    }
    return [uploadPosts] as const;
}