import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import Second from './Second';
import Third from './Third';
import Employees from './Employees';

export default function Main() {
  const [activeStep, setActiveStep] = React.useState(0);
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

  const steps = ['Profile', 'Medical History', 'Skills', 'Employment History'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <App
          linkVideo={linkVideo}
          setLinkVideo={setLinkVideo}
          fullName={fullName}
          setFullName={setFullName}
          fullNameError={fullNameError}
          id={id}
          setId={setId}
          idError={idError}
          passport={passport}
          setPassport={setPassport}
          bioFee={bioFee}
          setBioFee={setBioFee}
          bioFeeError={bioFeeError}
          loan={loan}
          setLoan={setLoan}
          loanError={loanError}
          pocketMoney={pocketMoney}
          setPocketMoney={setPocketMoney}
          pocketMoneyError={pocketMoneyError}
          minimumSalary={minimumSalary}
          setMinimumSalary={setMinimumSalary}
          minimumSalaryError={minimumSalaryError}
          maritalStatus={maritalStatus}
          setMaritalStatus={setMaritalStatus}
          maritalStatusError={maritalStatusError}
          exsg={exsg}
          setExsg={setExsg}
          childcare={childcare}
          setChildcare={setChildcare}
          elderlycare={elderlycare}
          setElderlycare={setElderlycare}
          remarks={remarks}
          setRemarks={setRemarks}
          dateOfBirth={dateOfBirth}
          setDateOfBirth={setDateOfBirth}
          dateOfBirthError={dateOfBirthError}
          placeOfBirth={placeOfBirth}
          setPlaceOfBirth={setPlaceOfBirth}
          placeOfBirthError={placeOfBirthError}
          height={height}
          setHeight={setHeight}
          heightError={heightError}
          weight={weight}
          setWeight={setWeight}
          weightError={weightError}
          nationality={nationality}
          setNationality={setNationality}
          nationalityError={nationalityError}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          phoneNumberError={phoneNumberError}
          address={address}
          setAddress={setAddress}
          addressError={addressError}
          port={port}
          setPort={setPort}
          portError={portError}
          religion={religion}
          setReligion={setReligion}
          religionError={religionError}
          edu={edu}
          setEdu={setEdu}
          eduError={eduError}
          siblings={siblings}
          setSiblings={setSiblings}
          aoc={aoc}
          setAoc={setAoc}
           />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
      case 3:
        return <Employees />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    let ret = true;
    if (activeStep === 0) {
      if (!fullName || !fullName.trim()) {
        setFullNameError('Please enter Full name');
        ret = false;
      }
      if (!id || !id.trim()) {
        setIdError('Please enter ID');
        ret = false;
      }
      if (!bioFee || !bioFee.trim()) {
        setBioFeeError('Please enter Bio Fee');
        ret = false;
      }
      if (!loan || !loan.trim()) {
        setLoanError('Please enter Loan');
        ret = false;
      }
      if (!pocketMoney || !pocketMoney.trim()) {
        setPocketMoneyError('Please enter Pocket Money');
        ret = false;
      }
      if (!minimumSalary || !minimumSalary.trim()) {
        setMinimumSalaryError('Please enter Minimum Salary');
        ret = false;
      }
      if (!maritalStatus || !maritalStatus.trim()) {
        setMaritalStatusError('Please enter Marital Status');
        ret = false;
      }
      if (!dateOfBirth || !dateOfBirth.trim()) {
        setDateOfBirthError('Please enter Date Of Birth');
        ret = false;
      }
      if (!placeOfBirth || !placeOfBirth.trim()) {
        setPlaceOfBirthError('Please enter ID');
        ret = false;
      }
      if (!height || !height.trim()) {
        setHeightError('Please enter ID');
        ret = false;
      }
      if (!weight || !weight.trim()) {
        setWeightError('Please enter ID');
        ret = false;
      }
      if (!nationality || !nationality.trim()) {
        setNationalityError('Please enter ID');
        ret = false;
      }
      if (!phoneNumber || !phoneNumber.trim()) {
        setPhoneNumberError('Please enter ID');
        ret = false;
      }
      if (!address || !address.trim()) {
        setAddressError('Please enter ID');
        ret = false;
      }
      if (!port || !port.trim()) {
        setPortError('Please enter ID');
        ret = false;
      }
      if (!religion || !religion.trim()) {
        setReligionError('Please enter ID');
        ret = false;
      }
      if (!edu || !edu.trim()) {
        setEduError('Please enter ID');
        ret = false;
      }
    }

    if (!ret) {
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main">
      <Typography component="h1" variant="h5">
        <b>Helper Form</b>
      </Typography>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Form Submitted
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </Container>
  );
}