import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import Textfield from './Components/FormsUI/Textfield';
import Select from './Components/FormsUI/Select';
import DateTimePicker from './Components/FormsUI/DataTimePicker';
import Checkbox from './Components/FormsUI/Checkbox';
import NextButton from './Components/FormsUI/NextButton';
import maritalstatus from './data/maritalstatus.json';
import expsg from './data/expsg.json';
import nation from './data/nation.json';
import relig from './data/relig.json';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

// const INITIAL_FORM_STATE = {
//   photo: '',
//   video: '',
//   id: '',
//   passport: '',
//   biofee: '',
//   loan: '',
//   pmoney: '',
//   msalary: '',
//   marital: '',
//   exsg: '',
//   childcare: false,
//   elderlycare: false,
//   remarks: '',
//   fullname: '',
//   dob: '',
//   pob: '',
//   height: '',
//   weigth: '',
//   nationality: '',
//   phone: '',
//   address: '',
//   port: '',
//   religion: '',
//   edu: '',
//   siblings: '',
//   aoc: '',
// };

// const FORM_VALIDATION = Yup.object().shape({
//   photo: Yup.string(),
//   video: Yup.string(),
//   id: Yup.string()
//     .required('Please enter ID'),
//   passport: Yup.string(),
//   biofee: Yup.string()
//     .required('Please enter Bio Fee'),
//   loan: Yup.string()
//     .required('Please enter Loan'),
//   pmoney: Yup.string()
//     .required('Please enter Pocket Money'),
//   msalary: Yup.string()
//     .required('Please enter Minimum Salary'),
//   marital: Yup.string()
//     .required('Please enter Marital Status'),
//   exsg: Yup.string(),
//   remarks: Yup.string(),
//   name: Yup.string()
//     .required('Please enter Full Name'),
//   dob: Yup.date()
//     .required('Please enter Date of Birth'),
//   pob: Yup.string()
//     .required('Please enter Place of Birth'),
//   height: Yup.string()
//     .required('Please enter Height'),
//   weight: Yup.string()
//     .required('Please enter Weight'),
//   nationality: Yup.string()
//     .required('Please enter Nationality'),
//   phone: Yup.string()
//     .required('Please enter Phone Number'),
//   address: Yup.string()
//     .required('Please enter Residental Address'),
//   port: Yup.string()
//     .required('Please enter Name of Port'),
//   religion: Yup.string()
//     .required('Please enter Religion'),
//   edu: Yup.string()
//     .required('Please enter Education Level'),
//   siblings: Yup.string(),
//   aoc: Yup.string(),
//   childcare: Yup.boolean(),
//   elderlycare: Yup.boolean()
// });

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

            <Formik
              // initialValues={{
              //   ...INITIAL_FORM_STATE
              // }}
              // validationSchema={FORM_VALIDATION}
              // onSubmit={values => {
              //   console.log(values);
              // }}
            >
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
                      error={id !== ''}
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
                      error={bioFee !== ''}
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
                      error={loan !== ''}
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
                      error={pocketMoney !== ''}
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
                      error={minimumSalary !== ''}
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
                    <Select
                      name="marital"
                      label="Marital Status"
                      error={maritalStatus !== ''}
                      helperText={maritalStatusError}
                      value={maritalStatus}
                      onChange={event => setMaritalStatus(event.target.value)}
                      options={maritalstatus}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Select
                      name="exsg"
                      label="Experience in SG"
                      value={exsg}
                      onChange={event => setExsg(event.target.value)}
                      options={expsg}
                    />
                  </Grid>

                  <Grid item xs={2}>
                    <Checkbox
                      name="childcare"
                      label="Childcare"
                      value={childcare}
                      onChange={event => setChildcare(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={2}>
                    <Checkbox
                      name="elderlycare"
                      label="Elderlycare"
                      value={elderlycare}
                      onChange={event => setElderlycare(event.target.value)}
                    />
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
                      error={dateOfBirth !== ''}
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
                      error={placeOfBirth !== ''}
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
                      error={height !== ''}
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
                      error={weight !== ''}
                      helperText={weightError}
                      value={weight}
                      onChange={event => setWeight(event.target.value)}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Select
                      name="nationality"
                      label="Nationality"
                      required
                      error={nationality !== ''}
                      helperText={nationalityError}
                      value={nationality}
                      onChange={event => setNationality(event.target.value)}
                      options={nation}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="phone"
                      label="Phone Number"
                      required
                      error={phoneNumber !== ''}
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
                      error={address !== ''}
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
                      error={port !== ''}
                      helperText={portError}
                      value={port}
                      onChange={event => setPort(event.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Select
                      name="religion"
                      label="Religion"
                      required
                      error={religion !== ''}
                      helperText={religionError}
                      value={religion}
                      onChange={event => setReligion(event.target.value)}
                      options={relig}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="edu"
                      label="Education Level"
                      required
                      error={edu !== ''}
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

                {/* <Stack spacing={2} direction="row">
                  <NextButton>Submit</NextButton>
                </Stack> */}
              </Form>
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

console.log('helo')

export default App;
