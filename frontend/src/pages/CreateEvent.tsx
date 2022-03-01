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

interface IFormInput {
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

  const { heading, submitButton } = useStyles();

  const [json, setJson] = useState<string>();

  const onSubmit = (data: IFormInput) => {
    setJson(JSON.stringify(data));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location: data.location, interest: data.interest, groupName: data.groupName, description: data.description })
    };

    // fetch('http://localhost:9010/api/sendEvent', requestOptions)
    //   .then(response => setJson(response.json));
  };

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
        {json && (
          <>
            <Typography variant="body1">
              Below is the JSON that would normally get passed to the server
              when a form gets submitted
            </Typography>
            <Typography variant="body2">{json}</Typography>
          </>
        )}
      </form>
    </Container>
  );
}

