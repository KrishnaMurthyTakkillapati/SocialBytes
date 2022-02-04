import { useMemo, useState } from 'react';
import { CssBaseline, Grid, Link, Paper, ThemeProvider } from '@mui/material';
import React from 'react';
import { type } from 'os';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Layout } from '../components/Layout';
import { flexbox } from '@mui/system';

function Tweet(props: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; type: String; })
{
    return(
        <div className = "tweet">
            

        <Layout >
            
      <Grid container  >
        <Grid item style={{ display: "flex", gap: "1rem" }} >
            
          <Paper elevation={8}>
              

              
              
            <Box sx={{ flexDirection: 'row' }} p={5}>
              <Box p={1} >
                  
                <Link href="/container">{props.name}</Link>
              </Box>
              <Box p={1}>
                <Link href="/grid">{props.type}</Link>
              </Box>
              
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Layout>

       
            

        </div>
        
    );
}

export default Tweet;

