import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Typography
} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Textfield from './Components/FormsUI/Textfield';
import NextButton from './Components/FormsUI/NextButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}));

// const INITIAL_FORM_STATE = {
//     allergies: '',
//     othersill: '',
//     disability: '',
//     diet: '',
//     othersfood: '',
//     rest: '',
//     remar: '',
//     mental: 'no',
//     epilepsy:'no',
//     asthma:'no',
//     diabetes:'no',
//     hyper:'no',
//     tbc:'no',
//     heart:'no',
//     malaria:'no',
//     operations:'no',
//     beef:'no',
//     pork:'no'
// };

// const FORM_VALIDATION = Yup.object().shape({
//     allergies: Yup.string(),
//     othersill: Yup.string(),
//     disability: Yup.string(),
//     diet: Yup.string(),
//     othersfood: Yup.string(),
//     rest: Yup.string(),
//     remar: Yup.string(),
// });

const Second = (props) => {
    const classes = useStyles();
    const { allergies, setAllergies } = props;
    const { mental, setMental } = props;
    const { epilepsy, setEpilepsy } = props;
    const { asthma, setAsthma } = props;
    const { diabetes, setDiabetes } = props;
    const { hyper, setHyper } = props;
    const { tbc, setTbc } = props;
    const { heart, setHeart } = props;
    const { malaria, setMalaria } = props;
    const { operations, setOperations } = props;
    const { othersIll, setOthersIll } = props;
    const { disabilities, setDisabilities } = props;
    const { diet, setDiet } = props;
    const { beef, setBeef } = props;
    const { pork, setPork } = props;
    const { othersFood, setOthersFood } = props;
    const { rest, setRest } = props;
    const { remar, setRemar } = props;


    return (
        <Grid container>
            <Grid item xs={12}>
                <Container fixed>
                    <div className={classes.formWrapper}>

                        <Formik
                        // initialValues={{
                        //     ...INITIAL_FORM_STATE
                        // }}
                        // validationSchema={FORM_VALIDATION}
                        // onSubmit={values => {
                        //     console.log(values);
                        // }}
                        >
                            <Form>

                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <Textfield
                                            name="allergies"
                                            label="Allergies"
                                            value={allergies}
                                            onChange={event => setAllergies(event.target.value)}
                                        />
                                    </Grid>

                                    
                                    <Grid item xs={12}>
                                        <Typography>Past And Existing Illness</Typography>
                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Mental Illness</FormLabel>
                                            <RadioGroup
                                                defaultValue="no"
                                                value={mental}
                                                row
                                                onChange={event => setMental(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Epilepsy</FormLabel>
                                            <RadioGroup
                                                defaultValue="no"
                                                value={epilepsy}
                                                row
                                                onChange={event => setEpilepsy(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Asthma</FormLabel>
                                            <RadioGroup
                                                defaultValue="no"
                                                value={asthma}
                                                row
                                                onChange={event => setAsthma(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Diabetes</FormLabel>
                                            <RadioGroup
                                                defaultValue="no"
                                                value={diabetes}
                                                row
                                                onChange={event => setDiabetes(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Hypertension</FormLabel>
                                            <RadioGroup
                                                defaultValue="no"
                                                value={hyper}
                                                row
                                                onChange={event => setHyper(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Tubercolosis</FormLabel>
                                            <RadioGroup
                                                defaultValue="no"
                                                value={tbc}
                                                row
                                                onChange={event => setTbc(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Heart Disease</FormLabel>
                                            <RadioGroup
                                                defaultValue="no"
                                                value={heart}
                                                row
                                                onChange={event => setHeart(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Malaria</FormLabel>
                                            <RadioGroup
                                                defaultValue="no"
                                                value={malaria}
                                                row
                                                onChange={event => setMalaria(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Operations</FormLabel>
                                            <RadioGroup
                                                defaultValue="no"
                                                value={operations}
                                                row
                                                onChange={event => setOperations(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Textfield
                                            name="othersill"
                                            label="Others"
                                            value={othersIll}
                                            onChange={event => setOthersIll(event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="disability"
                                            label="Physical Disabilities"
                                            value={disabilities}
                                            onChange={event => setDisabilities(event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="diet"
                                            label="Dietary Restrictions"
                                            value={diet}
                                            onChange={event => setDiet(event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Food Handling Preferences</Typography>
                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Pork</FormLabel>
                                            <RadioGroup
                                                defaultValue="yes"
                                                value={pork}
                                                row
                                                onChange={event => setPork(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Beef</FormLabel>
                                            <RadioGroup
                                                defaultValue="yes"
                                                value={beef}
                                                row
                                                onChange={event => setBeef(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Textfield
                                            name="othersfood"
                                            label="Others"
                                            value={othersFood}
                                            onChange={event => setOthersFood(event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="rest"
                                            label="Preference for Rest Day per month"
                                            value={rest}
                                            onChange={event => setRest(event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="remar"
                                            label="Remarks"
                                            value={remar}
                                            onChange={event => setRemar(event.target.value)}
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

export default Second;