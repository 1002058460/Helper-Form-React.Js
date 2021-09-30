import React from 'react';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid
} from '@material-ui/core';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Textfield from './Components/FormsUI/Textfield';
import DateTimePicker from './Components/FormsUI/DataTimePicker';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const App = (props) => {
  const classes = useStyles();

  const { linkVideo, setLinkVideo } = props;
  const { fullName, setFullName, fullNameError } = props;
  const { id, setId, idError } = props;
  const { passport, setPassport } = props;
  const { bioFee, setBioFee, bioFeeError } = props;
  const { loan, setLoan, loanError } = props;
  const { pocketMoney, setPocketMoney, pocketMoneyError } = props;
  const { minimumSalary, setMinimumSalary, minimumSalaryError } = props;
  const { maritalStatus, setMaritalStatus, maritalStatusError } = props;
  const { exsg, setExsg } = props;
  const { childcare, setChildcare } = props;
  const { elderlycare, setElderlycare } = props;
  const { remarks, setRemarks } = props;
  const { dateOfBirth, setDateOfBirth, dateOfBirthError } = props;
  const { placeOfBirth, setPlaceOfBirth, placeOfBirthError } = props;
  const { height, setHeight, heightError } = props;
  const { weight, setWeight, weightError } = props;
  const { nationality, setNationality, nationalityError } = props;
  const { phoneNumber, setPhoneNumber, phoneNumberError } = props;
  const { address, setAddress, addressError } = props;
  const { port, setPort, portError } = props;
  const { religion, setReligion, religionError } = props;
  const { edu, setEdu, eduError } = props;
  const { siblings, setSiblings } = props;
  const { aoc, setAoc } = props;

  return (
    <Grid container>

      <Grid item xs={12}>
        <Container fixed>
          <div className={classes.formWrapper}>

            <Formik>
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={6}>
                    <input
                      name="photo"
                      accept="image/*"
                      className={classes.input}
                      style={{ display: 'none' }}
                      id="outlined-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="outlined-button-file">
                      <Textfield
                        name="photo"
                        label="Upload your photo"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                          endAdornment: <Button variant="contained" component="span" className={classes.button}>
                            Upload
                          </Button>
                        }}
                      />
                    </label>
                  </Grid>


                  <Grid item xs={6}>
                    <Textfield
                      name="video"
                      label="Link Video"
                      value={linkVideo}
                      onChange={event => setLinkVideo(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="id"
                      required
                      label="ID"
                      error={idError !== ''}
                      helperText={idError}
                      value={id}
                      onChange={event => setId(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="passport"
                      label="Passport Status"
                      value={passport}
                      onChange={event => setPassport(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield
                      name="biofee"
                      label="Bio Fee"
                      required
                      error={bioFeeError !== ''}
                      helperText={bioFeeError}
                      value={bioFee}
                      onChange={event => setBioFee(event.target.value)}
                      type="number"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield
                      name="loan"
                      label="Loan"
                      required
                      error={loanError !== ''}
                      helperText={loanError}
                      value={loan}
                      onChange={event => setLoan(event.target.value)}
                      type="number"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield
                      name="pmoney"
                      label="Pocket Money"
                      required
                      error={pocketMoneyError !== ''}
                      helperText={pocketMoneyError}
                      value={pocketMoney}
                      onChange={event => setPocketMoney(event.target.value)}
                      type="number"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield
                      name="msalary"
                      label="Minimum Salary"
                      required
                      error={minimumSalaryError !== ''}
                      helperText={minimumSalaryError}
                      value={minimumSalary}
                      onChange={event => setMinimumSalary(event.target.value)}
                      type="number"
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
                          <MenuItem value={1}>Single</MenuItem>
                          <MenuItem value={2}>Married</MenuItem>
                          <MenuItem value={3}>Divorced</MenuItem>
                          <MenuItem value={4}>Widowed</MenuItem>
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
                          <MenuItem value={1}>Transfer</MenuItem>
                          <MenuItem value={2}>Ex-sg</MenuItem>
                          <MenuItem value={3}>Fresh</MenuItem>
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
                    <Textfield
                      name="remarks"
                      label="Remarks"
                      value={remarks}
                      onChange={event => setRemarks(event.target.value)}
                      multiline={true}
                      rows={3}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="name"
                      label="Full Name"
                      error={fullNameError !== ''}
                      helperText={fullNameError}
                      value={fullName}
                      onChange={event => setFullName(event.target.value)}
                      required
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <DateTimePicker
                      name="dob"
                      label="Date of Birth"
                      required
                      error={dateOfBirthError !== ''}
                      helperText={dateOfBirthError}
                      value={dateOfBirth}
                      onChange={event => setDateOfBirth(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield
                      name="pob"
                      label="Place of Birth"
                      required
                      error={placeOfBirthError !== ''}
                      helperText={placeOfBirthError}
                      value={placeOfBirth}
                      onChange={event => setPlaceOfBirth(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield
                      name="height"
                      label="Height"
                      required
                      type="number"
                      error={heightError !== ''}
                      helperText={heightError}
                      value={height}
                      onChange={event => setHeight(event.target.value)}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                      }}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Textfield
                      name="weight"
                      label="Weight"
                      required
                      error={weightError !== ''}
                      helperText={weightError}
                      value={weight}
                      onChange={event => setWeight(event.target.value)}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                      }}
                    />
                  </Grid>

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
                          onChange={event => setNationality(event.target.value)}
                        >
                          <MenuItem value={1}>Burmese</MenuItem>
                          <MenuItem value={2}>Filipino</MenuItem>
                          <MenuItem value={3}>Indonesian</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="phone"
                      label="Phone Number"
                      required
                      error={phoneNumberError !== ''}
                      helperText={phoneNumberError}
                      value={phoneNumber}
                      onChange={event => setPhoneNumber(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="address"
                      label="Residential Address"
                      required
                      error={addressError !== ''}
                      helperText={addressError}
                      value={address}
                      onChange={event => setAddress(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="port"
                      label="Name of Port / Airport To Be Repatriated To"
                      required
                      error={portError !== ''}
                      helperText={portError}
                      value={port}
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
                          onChange={event => setReligion(event.target.value)}
                        >
                          <MenuItem value={1}>Buddhist</MenuItem>
                          <MenuItem value={2}>Christian</MenuItem>
                          <MenuItem value={3}>Catholic</MenuItem>
                          <MenuItem value={4}>Hindu</MenuItem>
                          <MenuItem value={5}>Muslim</MenuItem>
                          <MenuItem value={6}>Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="edu"
                      label="Education Level"
                      required
                      error={eduError !== ''}
                      helperText={eduError}
                      value={edu}
                      onChange={event => setEdu(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="siblings"
                      label="Number of Sibings"
                      value={siblings}
                      onChange={event => setSiblings(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="aoc"
                      label="Age of Child"
                      value={aoc}
                      onChange={event => setAoc(event.target.value)}
                    />
                  </Grid>

                </Grid>
                <br />
              </Form>
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
