import { Box, Grid,  Typography } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';
import MediaCard from '../utils/MediaCard';
import dataList from '../lib/data.json'

export const Home = () => {
  const context = useContext(AppContext);
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




