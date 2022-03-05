import { Box, Grid, Paper, Typography } from '@mui/material';
import { Component, useCallback, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';
import { useGetPosts } from '../lib/api-hooks';
import { FetchState, PostData } from '../types/post';
import { styled } from '@mui/material/styles';
import MediaCard from '../utils/MediaCard';
import dataList from '../lib/data.json';
import axios from "axios";

export const SearchEvent = () => {
  const context = useContext(AppContext);
  const [postsData, setPostsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getPostsData = useCallback(async () => {
    let res = await axios.get('http://localhost:9010/api/getEvents')
    var data = res.data
    for(var i=0; i<data.length;i++){
        data[i].title = data[i].name
        data[i].image = "https://static01.nyt.com/images/2020/07/21/autossell/sports-reboot-promo-still/sports-reboot-promo-still-videoLarge.jpg"
    }
    setPostsData(data)
    console.log(postsData)
    setLoading(false)
  }, [postsData])
  
  useEffect(() => {
    getPostsData();
  },[]);

  if(!isLoading){
    return (
        <>
          <Helmet>
            <title>
              {PAGE_TITLE_HOME} | {APP_TITLE}
            </title>
          </Helmet>
          <Typography variant="h4">{`Hello, ${context.user.name} `}</Typography>
          <Box p={5}>
            <Grid container spacing={5}>
              {
                postsData.map((post, i) => {
                  return (
                    <Grid key={i} item>
                      <MediaCard {...post} />
                    </Grid>
                  );
                })
              }
            </Grid>
          </Box>
    
        </>
    
      );
    } else {
        return <div>Loading...</div>;
    }
};
