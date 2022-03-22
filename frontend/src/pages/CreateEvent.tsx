import {
  Container,
  Typography,
  TextField,
  Button,
  Input,
  Snackbar,
  Alert,
  CardActionArea,
  CardMedia
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useGetPosts } from '../lib/api-hooks';
import { FetchState } from '../types/post';
import { Redirect } from "react-router-dom";
import FileService from '../service/fileService';
import Card from '@mui/material/Card';

export interface IFormInput {
  location: string;
  interest: string;
  groupName: string;
  description: string;
  image: FileList;
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

  const [uploadPosts] = useGetPosts();

  const [open, setOpen] = useState(false);
  const [failure, setFailure] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const { heading, submitButton } = useStyles();
  const [groupName, setgroupName] = useState("")
  const onSubmit = async (data: IFormInput) => {
    const fileService = new FileService(data.image[0])
    const fileUploadResponse = await fileService.uploadFile()
    console.log(data.image[0].name);
    setOpen(true);
    if(!fileUploadResponse.success) {
      setFailure(true);
      setErrorMessage(fileUploadResponse.message)
    }
  };
  const [file, setFile] = useState("");
  function handleChange(e: any) {
    let url = URL.createObjectURL(e.target.files[0]);
    setFile(url)
    console.log(url)
  }

  if (groupName.length !== 0) {
    return (<>
      {/* <Link to='/cards/${}' */}
      <Redirect to={`/eventpage/${groupName}`} />
    </>)
  }
  return (
    <div title="App Root">
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
          <TextField
            {...register("image")}
            variant="outlined"
            type="file"
            label="Image Upload"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            fullWidth
          />
           {
            failure && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Event couldn't be created because {errorMessage}
              </Alert>
            </Snackbar>
          }

          {
            file.length > 0 &&

            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={file}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submitButton}
          >
            Create Event
          </Button>
        </form>
      </Container>
    </div>
  );
}

