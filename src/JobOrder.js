import React, { useState, useRef } from "react";
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
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Typography } from '@material-ui/core';
import SignatureCanvas from 'react-signature-canvas';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';

export default function App() {

    const useStyles = makeStyles((theme) => ({
        formWrapper: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(8),
        },
    }));

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



    const classes = useStyles();
    const [helperCode, setHelperCode] = React.useState('');
    const [helperCodeError, setHelperCodeError] = React.useState('');
    const [helperCodeErr, setHelperCodeErr] = React.useState(false);
    const [empName, setEmpName] = React.useState('');
    const [empNameError, setEmpNameError] = React.useState('');
    const [empNameErr, setEmpNameErr] = React.useState(false);
    const [fdw, setFdw] = React.useState('');
    const [fdwError, setFdwError] = React.useState('');
    const [fdwErr, setFdwErr] = React.useState(false);
    const [race, setRace] = React.useState('');
    const [raceError, setRaceError] = React.useState('');
    const [raceErr, setRaceErr] = React.useState(false);
    const [salary, setSalary] = React.useState('');
    const [salaryError, setSalaryError] = React.useState('');
    const [salaryErr, setSalaryErr] = React.useState(false);
    const [daysOff, setDaysOff] = React.useState('');
    const [daysOffError, setDaysOffError] = React.useState('');
    const [daysOffErr, setDaysOffErr] = React.useState(false);
    const [probation, setProbation] = React.useState('');
    const [probationError, setProbationError] = React.useState('');
    const [probationErr, setProbationErr] = React.useState(false);
    const [houseType, setHouseType] = React.useState('');
    const [houseTypeError, setHouseTypeError] = React.useState('');
    const [houseTypeErr, setHouseTypeErr] = React.useState(false);
    const [bedroom, setBedroom] = React.useState('');
    const [toilet, setToilet] = React.useState('');
    const [family, setFamily] = React.useState('');
    const [babies, setBabies] = React.useState('');
    const [childBelow12, setChildBelow12] = React.useState('');
    const [childBelow5, setChildBelow5] = React.useState('');
    const [fetchChild, setFetchChild] = React.useState('no');
    const [downstairs, setDownstairs] = React.useState('');
    const [busOnly, setBusOnly] = React.useState('');
    const [lookElderly, setLookElderly] = React.useState('no');
    const [healthy, setHealthy] = React.useState('');
    const [assist, setAssist] = React.useState('');
    const [bedridden, setBedridden] = React.useState('no');
    const [generalHouseWork, setGeneralHouseWork] = React.useState('no');
    const [iron, setIron] = React.useState('no');
    const [cook, setCook] = React.useState('no');
    const [clothes, setClothes] = React.useState('hand');
    const [carWash, setCarWash] = React.useState('no');
    const [pets, setPets] = React.useState('no');
    const [garden, setGarden] = React.useState('no');
    const [jobRemarks, setJobRemarks] = React.useState('');
    const [helperNameSign, setHelperNameSign] = React.useState('');
    const [helperNameSignError, setHelperNameSignError] = React.useState('');
    const [helperNameSignErr, setHelperNameSignErr] = React.useState(false);
    const [empNameSign, setEmpNameSign] = React.useState('');
    const [empNameSignError, setEmpNameSignError] = React.useState('');
    const [empNameSignErr, setEmpNameSignErr] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const sigCanvas = useRef({});

    const [imageURL, setImageURL] = useState(null);

    const save = () => {
        setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
        setOpen(false);
    }

    const clearFormErrors = () => {
        setHelperCodeError('');
        setHelperCodeErr(false);
        setEmpNameError('');
        setEmpNameErr(false);
        setFdwError('');
        setFdwErr(false);
        setRaceError('');
        setRaceErr(false);
        setSalaryError('');
        setSalaryErr(false);
        setDaysOffError('');
        setDaysOffErr(false);
        setProbationError('');
        setProbationErr(false);
        setHouseTypeError('');
        setHouseTypeErr(false);
        setHelperNameSignError("");
        setHelperNameSignErr(false);
        setEmpNameSignError("");
        setEmpNameSignErr(false);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        clearFormErrors();
        let ret = true;
        if (!helperCode || !helperCode.trim()) {
            setHelperCodeError('Please enter Code');
            setHelperCodeErr(true);
            ret = false;
        }
        if (!empName || !empName.trim()) {
            setEmpNameError('Please enter Name of Employer');
            setEmpNameErr(true);
            ret = false;
        }
        if (!fdw || !fdw.trim()) {
            setFdwError('Please enter Name of FDW');
            setFdwErr(true);
            ret = false;
        }
        if (!race) {
            setRaceError("Please enter Employer's Race");
            setRaceErr(true);
            ret = false;
        }
        if (!salary || !salary.trim()) {
            setSalaryError('Please enter Salary');
            setSalaryErr(true);
            ret = false;
        }
        if (!daysOff || !daysOff.trim()) {
            setDaysOffError('Please enter Day(s) Off');
            setDaysOffErr(true);
            ret = false;
        }
        if (!probation) {
            setProbationError('Please enter Probation');
            setProbationErr(true);
            ret = false;
        }
        if (!houseType) {
            setHouseTypeError('Please enter Type Of House');
            setHouseTypeErr(true);
            ret = false;
        }
        if (!helperNameSign) {
            setHelperNameSignError("Please enter Helper's Name");
            setHelperNameSignErr(true);
            ret = false;
        }
        if (!empNameSign) {
            setEmpNameSignError("Please enter Employer's Name");
            setEmpNameSignErr(true);
            ret = false;
        }

        if (!ret) {
            return;
        }

        await axios.post(`http://localhost:5002/job`, {
            helperCode, empName, fdw, race, salary, daysOff, probation, houseType, bedroom, toilet, family, babies,
            childBelow12, childBelow5, fetchChild, downstairs, busOnly, lookElderly, healthy, assist, bedridden, generalHouseWork,
            iron, cook, clothes, carWash, pets, garden, jobRemarks, helperNameSign, empNameSign, imageURL
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    return (
        <Container component="main">
            <Typography component="h1" variant="h5">
                <b>Job Order Form</b>
            </Typography>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Grid container>

                    <Grid item xs={12}>
                        <Container fixed>
                            <div className={classes.formWrapper}>

                                <Formik>
                                    <Form>

                                        <Grid container spacing={2}>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="helperCode"
                                                    label="Helper Code"
                                                    value={helperCode}
                                                    required
                                                    error={helperCodeErr}
                                                    helperText={helperCodeError}
                                                    onChange={event => setHelperCode(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="empName"
                                                    label="Name of Employer"
                                                    value={empName}
                                                    required
                                                    error={empNameErr}
                                                    helperText={empNameError}
                                                    onChange={event => setEmpName(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="fdw"
                                                    label="Name of FDW"
                                                    value={fdw}
                                                    required
                                                    error={fdwErr}
                                                    helperText={fdwError}
                                                    onChange={event => setFdw(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel>Employer's Race</InputLabel>
                                                        <Select
                                                            name="race"
                                                            label="Employer's Race"
                                                            error={raceErr}
                                                            helperText={raceError}
                                                            value={race}
                                                            onChange={event => setRace(event.target.value)}
                                                            required
                                                        >
                                                            <MenuItem value={"Chinese"}>Chinese</MenuItem>
                                                            <MenuItem value={"Indian"}>Indian</MenuItem>
                                                            <MenuItem value={"Malay"}>Malay</MenuItem>
                                                            <MenuItem value={"Other"}>Other</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="salary"
                                                    label="Salary"
                                                    value={salary}
                                                    required
                                                    error={salaryErr}
                                                    helperText={salaryError}
                                                    type="number"
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                                    }}
                                                    onChange={event => setSalary(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="daysOff"
                                                    label="Day(s) Off"
                                                    value={daysOff}
                                                    required
                                                    error={daysOffErr}
                                                    helperText={daysOffError}
                                                    onChange={event => setDaysOff(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="probation"
                                                    label="Probation"
                                                    value={probation}
                                                    required
                                                    error={probationErr}
                                                    helperText={probationError}
                                                    onChange={event => setProbation(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="houseType"
                                                    label="Type of House"
                                                    value={houseType}
                                                    required
                                                    error={houseTypeErr}
                                                    helperText={houseTypeError}
                                                    onChange={event => setHouseType(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="bedroom"
                                                    label="Number of Bedroom"
                                                    value={bedroom}
                                                    onChange={event => setBedroom(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="toilet"
                                                    label="Number of Toilet"
                                                    value={toilet}
                                                    onChange={event => setToilet(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="family"
                                                    label="Number of Family"
                                                    value={family}
                                                    onChange={event => setFamily(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="babies"
                                                    label="Number of Babies"
                                                    value={babies}
                                                    onChange={event => setBabies(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="childBelow12"
                                                    label="Children Below 12"
                                                    value={childBelow12}
                                                    onChange={event => setChildBelow12(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="childBelow5"
                                                    label="Children Below 5"
                                                    value={childBelow5}
                                                    onChange={event => setChildBelow5(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Fetch Children To & Back From School
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={fetchChild}
                                                    row
                                                    onChange={event => setFetchChild(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="downstairs"
                                                            label="Wait Downstairs"
                                                            value={downstairs}
                                                            onChange={event => setDownstairs(event.target.value)}
                                                        />
                                                    }
                                                    label="Wait Downstairs" />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="busOnly"
                                                            label="Bus Only"
                                                            value={busOnly}
                                                            onChange={event => setBusOnly(event.target.value)}
                                                        />
                                                    }
                                                    label="Bus Only" />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Look After Elderly
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={lookElderly}
                                                    row
                                                    onChange={event => setLookElderly(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="healthy"
                                                            label="Healthy"
                                                            value={healthy}
                                                            onChange={event => setHealthy(event.target.value)}
                                                        />
                                                    }
                                                    label="Healthy" />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="assist"
                                                            label="Assitance Needed"
                                                            value={assist}
                                                            onChange={event => setAssist(event.target.value)}
                                                        />
                                                    }
                                                    label="Assitance Needed" />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Bedridden Patient
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={bedridden}
                                                    row
                                                    onChange={event => setBedridden(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    General House Work
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={generalHouseWork}
                                                    row
                                                    onChange={event => setGeneralHouseWork(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Ironing of Clothes
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={iron}
                                                    row
                                                    onChange={event => setIron(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Cooking
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={cook}
                                                    row
                                                    onChange={event => setCook(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Clothes Washing by
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="hand"
                                                    value={clothes}
                                                    row
                                                    onChange={event => setClothes(event.target.value)}
                                                >
                                                    <FormControlLabel value="hand" control={<Radio />} label="Hand" />
                                                    <FormControlLabel value="machine" control={<Radio />} label="Machine" />
                                                    <FormControlLabel value="both" control={<Radio />} label="Both" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Car Washing
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={carWash}
                                                    row
                                                    onChange={event => setCarWash(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Take Care of Pet(s)
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={pets}
                                                    row
                                                    onChange={event => setPets(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Gardening
                                                </Typography>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={garden}
                                                    row
                                                    onChange={event => setGarden(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Textfield
                                                    name="jobRemarks"
                                                    label="Remarks"
                                                    value={jobRemarks}
                                                    onChange={event => setJobRemarks(event.target.value)}
                                                    multiline={true}
                                                    rows={3}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <div style={{ border: "2px solid #808080", borderStyle: "dashed", borderRadius: "20px", width: 300, height: 150 }}>
                                                </div>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <div style={{ border: "2px solid #808080", borderStyle: "dashed", borderRadius: "20px", width: 300, height: 150 }}>
                                                    {imageURL ? (
                                                        <img
                                                            src={imageURL}
                                                            alt="my signature"
                                                            style={{
                                                                width: 300, height: 150
                                                            }}
                                                        />
                                                    ) : null}
                                                </div>
                                                <Button onClick={handleOpen}>Add Signature</Button>
                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style}>
                                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                                            Draw your signature here
                                                        </Typography>
                                                        <br />
                                                        <SignatureCanvas
                                                            ref={sigCanvas}
                                                            canvasProps={{ width: 700, height: 350, className: 'sigCanvas' }} />
                                                        <Stack spacing={2} direction="row">
                                                            <Button onClick={handleClose}>Cancel</Button>
                                                            <Button variant="contained" onClick={save}>Confirm</Button>
                                                        </Stack>
                                                    </Box>
                                                </Modal>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Helper’s Signature
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography>
                                                    Employer’s Signature
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="helperNameSign"
                                                    label="Helper's Name"
                                                    value={helperNameSign}
                                                    required
                                                    error={helperNameSignErr}
                                                    helperText={helperNameSignError}
                                                    onChange={event => setHelperNameSign(event.target.value)}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Textfield
                                                    name="empNameSign"
                                                    label="Helper's Name"
                                                    value={empNameSign}
                                                    required
                                                    error={empNameSignErr}
                                                    helperText={empNameSignError}
                                                    onChange={event => setEmpNameSign(event.target.value)}
                                                />
                                            </Grid>

                                        </Grid>
                                        <br />

                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Link to="/" style={{ textDecoration: 'none' }}>
                                                <Button sx={{ mt: 3, ml: 1 }}>
                                                    Cancel
                                                </Button>
                                            </Link>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                onClick={handleSubmit}
                                                sx={{ mt: 3, ml: 1 }}
                                            >
                                                Submit
                                            </Button>
                                        </Box>

                                    </Form>
                                </Formik>

                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};
