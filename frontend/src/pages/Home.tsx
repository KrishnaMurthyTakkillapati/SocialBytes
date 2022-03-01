import { Box, Grid, Paper, Typography } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Tweet from '../utils/Tweet';

import logo from '../logo.svg';

import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';
import { useGetPosts } from '../lib/api-hooks';
import { FetchState } from '../types/post';
import { styled } from '@mui/material/styles';
import MediaCard from '../utils/MediaCard';
import dataList from '../lib/data.json'

export const Home = () => {
  const context = useContext(AppContext);
  const [posts, fetchState, getPosts] = useGetPosts();
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
  }));
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <Typography variant="h4">{`Hello, ${context.user.name} `}</Typography>
      <div className="jumbotron">
        <h1>{"Hellow"}</h1>
        <p>{"this.props.subText"}</p>
        {/* <PrimaryButton buttonText='Learn more'/> */}
      </div>
      <Box p={5}>
        <Grid container spacing={5}>
          {
            dataList.map((post, i) => {
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
};




