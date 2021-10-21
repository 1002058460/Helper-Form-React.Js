import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  display: 'block'
};

export default function ModalProfile(props) {
  const { candidateProfile, setCandidateProfile } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [height, setHeight] = React.useState('');
  const [heightError, setHeightError] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [weightError, setWeightError] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [nationalityError, setNationalityError] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [phoneNumberError, setPhoneNumberError] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [addressError, setAddressError] = React.useState('');
  const [port, setPort] = React.useState('');
  const [portError, setPortError] = React.useState('');
  const [religion, setReligion] = React.useState('');
  const [religionError, setReligionError] = React.useState('');
  const [edu, setEdu] = React.useState('');
  const [eduError, setEduError] = React.useState('');
  const [siblings, setSiblings] = React.useState('');
  const [aoc, setAoc] = React.useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    await axios.put(`http://localhost:5001/alexcandidate/${candidateProfile.id}`, {
      height, weight, nationality, phoneNumber, address, port, religion, education: edu, siblings, ageOfChild: aoc,
    })
      .then(res => {
        console.log(res.data)

        const result = res.data;
        setCandidateProfile(result);

        setOpen(false);
      })
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Edit Profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Profile
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel>Nationality</InputLabel>
                  <Select
                    name="nationality"
                    label="Nationality"
                    required
                    error={nationalityError !== ''}
                    helperText={nationalityError}
                    value={nationality}
                    fullWidth="true"
                    onChange={event => setNationality(event.target.value)}
                  >
                    <MenuItem value={"BURMESE"}>Burmese</MenuItem>
                    <MenuItem value={"FILIPINO"}>Filipino</MenuItem>
                    <MenuItem value={"INDONESIAN"}>Indonesian</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="phone"
                label="Phone Number"
                required
                error={phoneNumberError !== ''}
                helperText={phoneNumberError}
                value={phoneNumber}
                fullWidth="true"
                onChange={event => setPhoneNumber(event.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="address"
                label="Residential Address"
                required
                error={addressError !== ''}
                helperText={addressError}
                value={address}
                fullWidth="true"
                onChange={event => setAddress(event.target.value)}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                name="height"
                label="Height"
                required
                type="number"
                error={heightError !== ''}
                helperText={heightError}
                value={height}
                fullWidth="true"
                onChange={event => setHeight(event.target.value)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                name="weight"
                label="Weight"
                required
                error={weightError !== ''}
                helperText={weightError}
                value={weight}
                fullWidth="true"
                onChange={event => setWeight(event.target.value)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="port"
                label="Name of Port / Airport To Be Repatriated To"
                required
                error={portError !== ''}
                helperText={portError}
                value={port}
                fullWidth="true"
                onChange={event => setPort(event.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel>Religion</InputLabel>
                  <Select
                    name="religion"
                    label="Religion"
                    required
                    error={religionError !== ''}
                    helperText={religionError}
                    value={religion}
                    fullWidth="true"
                    onChange={event => setReligion(event.target.value)}
                  >
                    <MenuItem value={"BUDDHIST"}>Buddhist</MenuItem>
                    <MenuItem value={"CHRISTIAN"}>Christian</MenuItem>
                    <MenuItem value={"CATHOLIC"}>Catholic</MenuItem>
                    <MenuItem value={"HINDU"}>Hindu</MenuItem>
                    <MenuItem value={"MUSLIM"}>Muslim</MenuItem>
                    <MenuItem value={"OTHER"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="edu"
                label="Education Level"
                required
                error={eduError !== ''}
                helperText={eduError}
                value={edu}
                fullWidth="true"
                onChange={event => setEdu(event.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="siblings"
                label="Number of Sibings"
                value={siblings}
                fullWidth="true"
                onChange={event => setSiblings(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="aoc"
                label="Age of Child"
                value={aoc}
                fullWidth="true"
                onChange={event => setAoc(event.target.value)}
              />
            </Grid>

            <br />
            <Stack spacing={2} direction="row">
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" onClick={handleSubmit}>Save</Button>
            </Stack>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}