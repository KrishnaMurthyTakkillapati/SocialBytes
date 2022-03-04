import {
  Container,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useGetPosts } from '../lib/api-hooks';
import { FetchState } from '../types/post';
import { Redirect, Route, useParams } from "react-router-dom";

export interface IFormInput {
  location: string;
  interest: string;
  groupName: string;
  description: string;
}


const schema = yup.object().shape({
  location: yup.string().required(),
  interest: yup.string().required().min(2),
  groupName: yup.string().required().min(8).max(120),
  description: yup.string().required().min(10),
});

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    //   margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    //   marginTop: theme.spacing(4),
  },
}));

export function Event() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  
  const [posts, fetchState, uploadPosts,getPosts] = useGetPosts();

  const { heading, submitButton } = useStyles();

  const [toEvent,setToEvent] =useState(false)
    const onSubmit = (data: IFormInput) => {
      uploadPosts(data).then((info)=>
      {
      setToEvent(true)
      })
  };

  if(toEvent===true){
    return  <Route exact path="/event/:id"  />
  }
  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h3">
        Create Event
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register("location")}
          variant="outlined"
          margin="normal"
          label="Location"
          helperText={errors.location?.message}
          error={!!errors.location?.message}
          fullWidth
          required
        />
        <TextField
          {...register("interest")}
          variant="outlined"
          margin="normal"
          label="Interest"
          helperText={errors.interest?.message}
          error={!!errors.interest?.message}
          fullWidth
          required
        />
        <TextField
          {...register("groupName")}
          variant="outlined"
          margin="normal"
          label="Group Name"
          helperText={errors.groupName?.message}
          error={!!errors.groupName?.message}
          fullWidth
          required
        />
        <TextField
          {...register("description")}
          variant="outlined"
          margin="normal"
          label="Description"
          helperText={errors.description?.message}
          error={!!errors.description?.message}
          fullWidth
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={submitButton}
        >
          Create Event
        </Button>
        {
          fetchState===FetchState.SUCCESS && (<>

          
          </>)
        }
      </form>
    </Container>
  );
}

