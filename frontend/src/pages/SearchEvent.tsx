import { Box, Grid, Paper, Typography } from '@mui/material';
import { Component, useCallback, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

import { eventService } from '../service/eventService';
import { IFormInput } from './CreateEvent';
import EventCard from '../utils/EventCard';
import {  useParams } from 'react-router-dom';

export const SearchEvent = () => {
  const context = useContext(AppContext);
  const [postsData, setPostsData] = useState<Array<IFormInput>>([]);
  const [isLoading, setLoading] = useState(true);
  const { query }: { query: string } = useParams();
  const queryMode = query;

  const getPostsData = useCallback(async () => {
    eventService.getAll().then(response => {
      setPostsData(response as Array<IFormInput>);
    })
    setLoading(false)
  }, [query])

  const getQueryPostData = useCallback(async () => {
    eventService.searchOp(query).then(response => {
      setPostsData(response as Array<IFormInput>);
    })
    setLoading(false)
  }, [query])

  useEffect(() => {
    if (!queryMode) {
      getPostsData();
    }
    else {
      getQueryPostData();
    }
  }, [query]);

  // if (!isLoading) {
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
                return (<>
                  <Grid key={i} item>
                    <EventCard {...post} />
                  </Grid>
                </>
                );
              })
            }
          </Grid>
        </Box>
      </>
    );
  // } else {
  //   return <div>Loading...</div>;
  // }
};