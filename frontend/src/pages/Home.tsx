import { styled, Typography } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Tweet from '../utils/Tweet';

import logo from '../logo.svg';

import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

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
      
      <div style={{ display: "flex" }}>
        <Tweet name="Gator night" type="Casual" />
        <Tweet name="Football match" type="Sports event" />
        <Tweet name="Grad ceremony" type="Academic"/>
        <Tweet name="Basketball match" type="Sports event"/>

      </div>
    </>
    
  );
};




