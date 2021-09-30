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

  const [allergies, setAllergies] = React.useState('');
  const [mental, setMental] = React.useState('no');
  const [epilepsy, setEpilepsy] = React.useState('no');
  const [asthma, setAsthma] = React.useState('no');
  const [diabetes, setDiabetes] = React.useState('no');
  const [hyper, setHyper] = React.useState('no');
  const [tbc, setTbc] = React.useState('no');
  const [heart, setHeart] = React.useState('no');
  const [malaria, setMalaria] = React.useState('no');
  const [operations, setOperations] = React.useState('no');
  const [othersIll, setOthersIll] = React.useState('');
  const [disabilities, setDisabilities] = React.useState('');
  const [diet, setDiet] = React.useState('');
  const [beef, setBeef] = React.useState('no');
  const [pork, setPork] = React.useState('no');
  const [othersFood, setOthersFood] = React.useState('');
  const [rest, setRest] = React.useState('');
  const [remar, setRemar] = React.useState('');

  const [infants1, setInfants1] = React.useState('yes');
  const [infants2, setInfants2] = React.useState('yes');
  const [infantsText, setInfantsText]=React.useState('');
  const [careElderly1, setCareElderly1]=React.useState('yes');
  const [careElderly2, setCareElderly2]=React.useState('yes');
  const [careElderlyText, setCareElderlyText]=React.useState('');
  const [careDisabled1, setCareDisabled1]=React.useState('yes');
  const [careDisabled2, setCareDisabled2]=React.useState('yes');
  const [careDisabledText, setCareDisabledText]=React.useState('');
  const [genHouse1, setGenHouse1]=React.useState('yes');
  const [genHouse2, setGenHouse2]=React.useState('yes');
  const [genHouseText, setGenHouseText]=React.useState('');
  const [cooking1, setCooking1]=React.useState('yes');
  const [cooking2, setCooking2]=React.useState('yes');
  const [cookingText, setCookingText]=React.useState('');
  const [lang1, setLang1]=React.useState('yes');
  const [lang2, setLang2]=React.useState('yes');
  const [langText1, setLangText1]=React.useState('');
  const [langText2, setLangText2]=React.useState('');
  const [otherSkills1, setOtherSkills1]=React.useState('yes');
  const [otherSkills2, setOtherSkills2]=React.useState('yes');
  const [otherSkillsText1, setOtherSkillsText1]=React.useState('');
  const [otherSkillsText2, setOtherSkillsText2]=React.useState('');

  const [infants3, setInfants3] = React.useState('yes');
  const [infants4, setInfants4] = React.useState('yes');
  const [infantsTextB, setInfantsTextB]=React.useState('');
  const [careElderly3, setCareElderly3]=React.useState('yes');
  const [careElderly4, setCareElderly4]=React.useState('yes');
  const [careElderlyTextB, setCareElderlyTextB]=React.useState('');
  const [careDisabled3, setCareDisabled3]=React.useState('yes');
  const [careDisabled4, setCareDisabled4]=React.useState('yes');
  const [careDisabledTextB, setCareDisabledTextB]=React.useState('');
  const [genHouse3, setGenHouse3]=React.useState('yes');
  const [genHouse4, setGenHouse4]=React.useState('yes');
  const [genHouseTextB, setGenHouseTextB]=React.useState('');
  const [cooking3, setCooking3]=React.useState('yes');
  const [cooking4, setCooking4]=React.useState('yes');
  const [cookingTextB, setCookingTextB]=React.useState('');
  const [lang3, setLang3]=React.useState('yes');
  const [lang4, setLang4]=React.useState('yes');
  const [langText3, setLangText3]=React.useState('');
  const [langText4, setLangText4]=React.useState('');
  const [otherSkills3, setOtherSkills3]=React.useState('yes');
  const [otherSkills4, setOtherSkills4]=React.useState('yes');
  const [otherSkillsText3, setOtherSkillsText3]=React.useState('');
  const [otherSkillsText4, setOtherSkillsText4]=React.useState('');

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
        return <Second 
        allergies={allergies}
          setAllergies={setAllergies}
          mental={mental}
          setMental={setMental}
          epilepsy={epilepsy}
          setEpilepsy={setEpilepsy}
          asthma={asthma}
          setAsthma={setAsthma}
          diabetes={diabetes}
          setDiabetes={setDiabetes}
          hyper={hyper}
          setHyper={setHyper}
          tbc={tbc}
          setTbc={setTbc}
          heart={heart}
          setHeart={setHeart}
          malaria={malaria}
          setMalaria={setMalaria}
          operations={operations}
          setOperations={setOperations}
          othersIll={othersIll}
          setOthersIll={setOthersIll}
          disabilities={disabilities}
          setDisabilities={setDisabilities}
          diet={diet}
          setDiet={setDiet}
          beef={beef}
          setBeef={setBeef}
          pork={pork}
          setPork={setPork}
          othersFood={othersFood}
          setOthersFood={setOthersFood}
          rest={rest}
          setRest={setRest}
          remar={remar}
          setRemar={setRemar}
        />;
      case 2:
        return <Third 
        infants1={infants1}
        setInfants1={setInfants1}
        infants2={infants2}
        setInfants2={setInfants2}
        infantsText={infantsText} 
        setInfantsText={setInfantsText}
        careElderly1={careElderly1}
        setCareElderly1={setCareElderly1}
        careElderly2={careElderly2}
        setCareElderly2={setCareElderly2}
        careElderlyText={careElderlyText}
        setCareElderlyText={setCareElderlyText}
        careDisabled1={careDisabled1} 
        setCareDisabled1={setCareDisabled1}
        careDisabled2={careDisabled2}
        setCareDisabled2={setCareDisabled2}
        careDisabledText={careDisabledText}
        setCareDisabledText={setCareDisabledText}
        genHouse1={genHouse1}
        setGenHouse1={setGenHouse1}
        genHouse2={genHouse2}
        setGenHouse2={setGenHouse2}
        genHouseText={genHouseText}
        setGenHouseText={setGenHouseText}
        cooking1 ={cooking1}
        setCooking1={setCooking1}
        cooking2={cooking2}
        setCooking2={setCooking2}
        cookingText={cookingText}
        setCookingText={setCookingText}
        lang1={lang1}
        setLang1={setLang1}
        lang2={lang2}
        setLang2={setLang2}
        langText1={langText1}
        setLangText1={setLangText1}
        langText2={langText2} 
        setLangText2={setLangText2}
        otherSkills1={otherSkills1}
        setOtherSkills1={setOtherSkills1}
        otherSkills2={otherSkills2}
        setOtherSkills2={setOtherSkills2}
        otherSkillsText1={otherSkillsText1}
        setOtherSkillsText1={setOtherSkillsText1}
        otherSkillsText2={otherSkillsText2}
        setOtherSkillsText2={setOtherSkillsText2}
        
        infants3={infants3}
        setInfants3={setInfants3}
        infants4={infants4}
        setInfants4={setInfants4}
        infantsTextB={infantsTextB} 
        setInfantsTextB={setInfantsTextB}
        careElderly3={careElderly3}
        setCareElderly3={setCareElderly3}
        careElderly4={careElderly4}
        setCareElderly4={setCareElderly4}
        careElderlyTextB={careElderlyTextB}
        setCareElderlyTextB={setCareElderlyTextB}
        careDisabled3={careDisabled3} 
        setCareDisabled3={setCareDisabled3}
        careDisabled4={careDisabled4}
        setCareDisabled4={setCareDisabled4}
        careDisabledTextB={careDisabledTextB}
        setCareDisabledTextB={setCareDisabledTextB}
        genHouse3={genHouse3}
        setGenHouse3={setGenHouse3}
        genHouse4={genHouse4}
        setGenHouse4={setGenHouse4}
        genHouseTextB={genHouseTextB}
        setGenHouseTextB={setGenHouseTextB}
        cooking3 ={cooking3}
        setCooking3={setCooking3}
        cooking4={cooking4}
        setCooking4={setCooking4}
        cookingTextB={cookingTextB}
        setCookingTextB={setCookingTextB}
        lang3={lang3}
        setLang3={setLang3}
        lang4={lang4}
        setLang4={setLang4}
        langText3={langText3}
        setLangText3={setLangText3}
        langText4={langText4} 
        setLangText4={setLangText4}
        otherSkills3={otherSkills3}
        setOtherSkills3={setOtherSkills3}
        otherSkills4={otherSkills4}
        setOtherSkills4={setOtherSkills4}
        otherSkillsText3={otherSkillsText3}
        setOtherSkillsText3={setOtherSkillsText3}
        otherSkillsText4={otherSkillsText4}
        setOtherSkillsText4={setOtherSkillsText4}
        />;
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
      if (!maritalStatus) {
        setMaritalStatusError('Please enter Marital Status');
        ret = false;
      }
      if (!dateOfBirth) {
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
      if (!nationality) {
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
      if (!religion) {
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