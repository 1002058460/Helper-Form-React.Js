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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
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
  height: '90%',
  display: 'block'
};

export default function ModalBiodata(props) {
  const { candidateInfo, setCandidateInfo } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [photo, setPhoto] = React.useState('');
  const [linkVideo, setLinkVideo] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [fullNameError, setFullNameError] = React.useState('');
  const [id, setId] = React.useState('');
  const [idError, setIdError] = React.useState('');
  const [passport, setPassport] = React.useState('');
  const [bioFee, setBioFee] = React.useState('');
  const [bioFeeError, setBioFeeError] = React.useState('');
  const [loan, setLoan] = React.useState('');
  const [loanError, setLoanError] = React.useState('');
  const [pocketMoney, setPocketMoney] = React.useState('');
  const [pocketMoneyError, setPocketMoneyError] = React.useState('');
  const [minimumSalary, setMinimumSalary] = React.useState('');
  const [minimumSalaryError, setMinimumSalaryError] = React.useState('');
  const [maritalStatus, setMaritalStatus] = React.useState('');
  const [maritalStatusError, setMaritalStatusError] = React.useState('');
  const [exsg, setExsg] = React.useState('');
  const [childcare, setChildcare] = React.useState('');
  const [elderlycare, setElderlycare] = React.useState('');
  const [remarks, setRemarks] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [dateOfBirthError, setDateOfBirthError] = React.useState('');
  const [placeOfBirth, setPlaceOfBirth] = React.useState('');
  const [placeOfBirthError, setPlaceOfBirthError] = React.useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    await axios.put(`http://localhost:5001/alexcandidate/${candidateInfo.id}`, {
      photo, linkVideo, fullName, dateOfBirth, placeOfBirth,
      id, passport, bioFee, loan, pocketMoney, minimumSalary,
      maritalStatus, exsg, childcare, elderlycare, remarks

    })
      .then(res => {
        console.log(res.data)

        const result = res.data;
        setCandidateInfo(result);

        setOpen(false);
      })
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Edit Biodata</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change Status
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <input
                name="photo"
                accept="image/*"
                style={{ display: 'none' }}
                id="outlined-button-file"
                multiple
                type="file"
              />
              <label htmlFor="outlined-button-file">
                <TextField
                  name="photo"
                  label="Upload your photo"
                  fullWidth="true"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: <Button value={photo}
                      onChange={event => setPhoto(event.target.value)} variant="contained" component="span">
                      Upload
                    </Button>
                  }}
                />
              </label>
            </Grid>


            <Grid item xs={6}>
              <TextField
                name="linkVideo"
                label="Link Video"
                value={linkVideo}
                fullWidth="true"
                onChange={event => setLinkVideo(event.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="name"
                label="Full Name"
                error={fullNameError !== ''}
                helperText={fullNameError}
                value={fullName}
                fullWidth="true"
                onChange={event => setFullName(event.target.value)}
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="dob"
                label="Date of Birth"
                required
                error={dateOfBirthError !== ''}
                helperText={dateOfBirthError}
                value={dateOfBirth}
                fullWidth="true"
                onChange={event => setDateOfBirth(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="pob"
                label="Place of Birth"
                required
                error={placeOfBirthError !== ''}
                helperText={placeOfBirthError}
                value={placeOfBirth}
                fullWidth="true"
                onChange={event => setPlaceOfBirth(event.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="id"
                required
                label="ID"
                error={idError !== ''}
                helperText={idError}
                value={id}
                fullWidth="true"
                onChange={event => setId(event.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="passport"
                label="Passport Status"
                value={passport}
                fullWidth="true"
                onChange={event => setPassport(event.target.value)}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                name="biofee"
                label="Bio Fee"
                required
                error={bioFeeError !== ''}
                helperText={bioFeeError}
                value={bioFee}
                fullWidth="true"
                onChange={event => setBioFee(event.target.value)}
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                name="loan"
                label="Loan"
                required
                error={loanError !== ''}
                helperText={loanError}
                value={loan}
                fullWidth="true"
                onChange={event => setLoan(event.target.value)}
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                name="pmoney"
                label="Pocket Money"
                required
                error={pocketMoneyError !== ''}
                helperText={pocketMoneyError}
                value={pocketMoney}
                fullWidth="true"
                onChange={event => setPocketMoney(event.target.value)}
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                name="msalary"
                label="Minimum Salary"
                required
                error={minimumSalaryError !== ''}
                helperText={minimumSalaryError}
                value={minimumSalary}
                onChange={event => setMinimumSalary(event.target.value)}
                type="number"
                fullWidth="true"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel>Marital Status</InputLabel>
                  <Select
                    name="marital"
                    label="Marital Status"
                    error={maritalStatusError !== ''}
                    helperText={maritalStatusError}
                    value={maritalStatus}
                    onChange={event => setMaritalStatus(event.target.value)}
                    required
                  >
                    <MenuItem value={"SINGLE"}>Single</MenuItem>
                    <MenuItem value={"MARRIED"}>Married</MenuItem>
                    <MenuItem value={"DIVORCED"}>Divorced</MenuItem>
                    <MenuItem value={"WIDOWED"}>Widowed</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel>Experience in SG</InputLabel>
                  <Select
                    name="EXSG"
                    label="Experience in SG"
                    value={exsg}
                    onChange={event => setExsg(event.target.value)}
                  >
                    <MenuItem value={"TRANSFER"}>Transfer</MenuItem>
                    <MenuItem value={"EX-SG"}>Ex-sg</MenuItem>
                    <MenuItem value={"FRESH"}>Fresh</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="childcare"
                    label="Childcare"
                    value={childcare}
                    onChange={event => setChildcare(event.target.value)}
                  />
                }
                label="Childcare" />
            </Grid>

            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="elderlycare"
                    label="Elderlycare"
                    value={elderlycare}
                    onChange={event => setElderlycare(event.target.value)}
                  />
                }
                label="Elderlycare" />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="remarks"
                label="Remarks"
                value={remarks}
                onChange={event => setRemarks(event.target.value)}
                multiline={true}
                fullWidth="true"
                rows={3}
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