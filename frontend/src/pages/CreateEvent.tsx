import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  CardActionArea,
  CardMedia,
  Select,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  useTheme,
  Theme
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import FileService from '../service/fileService';
import Card from '@mui/material/Card';
import { ChangeEvent } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";

import "@reach/combobox/styles.css";

export interface IFormInput {
  location: string;
  interest: string[];
  groupName: string;
  description: string;
  image: FileList;
  category: string[];
  dateTime: string;
}

const schema = yup.object().shape({
  location: yup.string().required(),
  // interest: yup.string().required().min(2),
  groupName: yup.string().required().min(8).max(120),
  description: yup.string().required().min(10),
  // category: yup.string().required(),
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

  const onSubmit = async (data: IFormInput) => {
    const fileService = new FileService(data.image[0])
    const fileUploadResponse = await fileService.uploadFile()
    console.log(data.image[0].name);
    setOpen(true);
    if (!fileUploadResponse.success) {
      setFailure(true);
      setErrorMessage(fileUploadResponse.message)
    }
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(data.image[0]);
  };

  const [file, setFile] = useState("");
  function handleChange(e: any) {
    let url = URL.createObjectURL(e.target.files[0]);
    setFile(url)
    console.log(url)
  }
  
  const [date, setDate] = useState<Date | null>();
  function handleDate(newValue: Date | null) {
    setDate(newValue);
  }

  function getStyles(name: string, interestName: readonly string[], theme: Theme) {
    return {
      fontWeight:
        interestName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const interestsList = [
    'Science & Tech',
    'Business',
    'Entertainment',
    'Sports',
    'Fashion',
    'Lifestyle',
    'Volunteering',
    'Age Groups',
    'Health',
    'Conferences',
  ];
  const theme = useTheme();
  const [interestName, setInterestName] = useState<string[]>([]);

  const handleSelection = (event: SelectChangeEvent<typeof interestName>) => {
    const {
      target: { value },
    } = event;
    setInterestName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const { ready, value, suggestions: { status, data }, setValue } = usePlacesAutocomplete();

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSelect = (val: string): void => {
    setValue(val, false);
  };

  const renderSuggestions = (): JSX.Element => {
    const suggestions = data.map(({ place_id, description }: any) => (
      <ComboboxOption key={place_id} value={description} style={{color: "black"}}
      />
    ));

    return (
      <>
        {suggestions}
        {/* <li className="logo">
          <img
            src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
            alt="Powered by Google"
          />
        </li> */}
      </>
    );
  };

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
          {/* <TextField
            {...register("interest")}
            variant="outlined"
            margin="normal"
            label="Interest"
            helperText={errors.interest?.message}
            error={!!errors.interest?.message}
            fullWidth
            required
          /> */}
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
          <Select
            {...register("interest")}
            multiple
            displayEmpty
            fullWidth
            variant="outlined"
            value={interestName}
            onChange={handleSelection}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Interests</em>;
              }

              return selected.join(', ');
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <em>Interests</em>
            </MenuItem>
            {interestsList.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, interestName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>

          {/* <div className="form-input">
            <label htmlFor="venue">Venue:</label><br />
            <LocationSearchInput value={venue} handleVenue={this.handleVenue}/>
          </div><br /> */}

          
          <TextField
            {...register("dateTime")}
            id="datetime-local"
            label="Event Date Time"
            type="datetime-local"
            variant="outlined"
            margin="normal"
            defaultValue="2022-05-24T10:30"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
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

        <Combobox onSelect={handleSelect} aria-labelledby="demo">
            <ComboboxInput
              style={{ width: 700, maxWidth: "100%",height:40,margin: "5% 0", color: "black"}}
              value={value}
              onChange={handleInput}
              disabled={!ready}
               
            />
            <ComboboxPopover>
              <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
            </ComboboxPopover>
          </Combobox>

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

