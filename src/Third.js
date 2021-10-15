import React from 'react';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Typography
} from '@material-ui/core';
import Textfield from './Components/FormsUI/Textfield';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}));

const Third = (props) => {
    const classes = useStyles();
    const { infants1, setInfants1 } = props;
    const { infants2, setInfants2 } = props;
    const { infantsText, setInfantsText } = props;
    const { careElderly1, setCareElderly1 } = props;
    const { careElderly2, setCareElderly2 } = props;
    const { careElderlyText, setCareElderlyText } = props;
    const { careDisabled1, setCareDisabled1 } = props;
    const { careDisabled2, setCareDisabled2 } = props;
    const { careDisabledText, setCareDisabledText } = props;
    const { genHouse1, setGenHouse1 } = props;
    const { genHouse2, setGenHouse2 } = props;
    const { genHouseText, setGenHouseText } = props;
    const { cooking1, setCooking1 } = props;
    const { cooking2, setCooking2 } = props;
    const { cookingText, setCookingText } = props;
    const { lang1, setLang1 } = props;
    const { lang2, setLang2 } = props;
    const { langText1, setLangText1 } = props;
    const { langText2, setLangText2 } = props;
    const { otherSkills1, setOtherSkills1 } = props;
    const { otherSkills2, setOtherSkills2 } = props;
    const { otherSkillsText1, setOtherSkillsText1 } = props;
    const { otherSkillsText2, setOtherSkillsText2 } = props;

    const { infants3, setInfants3 } = props;
    const { infants4, setInfants4 } = props;
    const { infantsTextB, setInfantsTextB } = props;
    const { careElderly3, setCareElderly3 } = props;
    const { careElderly4, setCareElderly4 } = props;
    const { careElderlyTextB, setCareElderlyTextB } = props;
    const { careDisabled3, setCareDisabled3 } = props;
    const { careDisabled4, setCareDisabled4 } = props;
    const { careDisabledTextB, setCareDisabledTextB } = props;
    const { genHouse3, setGenHouse3 } = props;
    const { genHouse4, setGenHouse4 } = props;
    const { genHouseTextB, setGenHouseTextB } = props;
    const { cooking3, setCooking3 } = props;
    const { cooking4, setCooking4 } = props;
    const { cookingTextB, setCookingTextB } = props;
    const { lang3, setLang3 } = props;
    const { lang4, setLang4 } = props;
    const { langText3, setLangText3 } = props;
    const { langText4, setLangText4 } = props;
    const { otherSkills3, setOtherSkills3 } = props;
    const { otherSkills4, setOtherSkills4 } = props;
    const { otherSkillsText3, setOtherSkillsText3 } = props;
    const { otherSkillsText4, setOtherSkillsText4 } = props;

    return (
        <Grid container>

            <Grid item xs={12}>
                <Container fixed>
                    <div className={classes.formWrapper}>

                        <Formik>
                            <Form>

                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <FormLabel>Interview by Singapore EA</FormLabel>
                                        <Grid>
                                            <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                                <Grid item xs={3}><Typography>Care of infants / children</Typography></Grid>
                                                <RadioGroup
                                                    value={infants1}
                                                    row
                                                    onChange={event => setInfants1(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                                <RadioGroup
                                                    value={infants2}
                                                    row
                                                    onChange={event => setInfants2(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                                <Grid item xs={3}>
                                                    <Textfield
                                                        name="infantstext"
                                                        label="Assessment / Observation"
                                                        value={infantsText}
                                                        onChange={event => setInfantsText(event.target.value)}
                                                    />
                                                </Grid>
                                            </div>
                                        </Grid>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>Care of Elderly</Typography></Grid>
                                            <RadioGroup
                                                value={careElderly1}
                                                row
                                                onChange={event => setCareElderly1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={careElderly2}
                                                row
                                                onChange={event => setCareElderly2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="careofelderlytext"
                                                    label="Assessment / Observation"
                                                    value={careElderlyText}
                                                    onChange={event => setCareElderlyText(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>Care of disabled</Typography></Grid>
                                            <RadioGroup
                                                value={careDisabled1}
                                                row
                                                onChange={event => setCareDisabled1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={careDisabled2}
                                                row
                                                onChange={event => setCareDisabled2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="careofdisabledtext"
                                                    label="Assessment / Observation"
                                                    value={careDisabledText}
                                                    onChange={event => setCareDisabledText(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>General Housework</Typography></Grid>
                                            <RadioGroup
                                                value={genHouse1}
                                                row
                                                onChange={event => setGenHouse1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={genHouse2}
                                                row
                                                onChange={event => setGenHouse2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="generalhouseworktext"
                                                    label="Assessment / Observation"
                                                    value={genHouseText}
                                                    onChange={event => setGenHouseText(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>Cooking</Typography></Grid>
                                            <RadioGroup
                                                value={cooking1}
                                                row
                                                onChange={event => setCooking1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={cooking2}
                                                row
                                                onChange={event => setCooking2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="cookingtext"
                                                    label="Assessment / Observation"
                                                    value={cookingText}
                                                    onChange={event => setCookingText(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}>
                                                <Typography>Language Abilities</Typography>
                                                <Textfield
                                                    name="languageabilitiestext1"
                                                    label="Language Abilities"
                                                    value={langText1}
                                                    onChange={event => setLangText1(event.target.value)}
                                                />
                                            </Grid>
                                            <RadioGroup
                                                value={lang1}
                                                row
                                                onChange={event => setLang1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={lang2}
                                                row
                                                onChange={event => setLang2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="languageabilitiestext2"
                                                    label="Assessment / Observation"
                                                    value={langText2}
                                                    onChange={event => setLangText2(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}>
                                                <Typography>Other Skills</Typography>
                                                <Textfield
                                                    name="otherskillstext1"
                                                    label="Other Skills"
                                                    value={otherSkillsText1}
                                                    onChange={event => setOtherSkillsText1(event.target.value)}
                                                />
                                            </Grid>
                                            <RadioGroup
                                                value={otherSkills1}
                                                row
                                                onChange={event => setOtherSkills1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={otherSkills2}
                                                row
                                                onChange={event => setOtherSkills2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="otherskillstext2"
                                                    label="Assessment / Observation"
                                                    value={otherSkillsText2}
                                                    onChange={event => setOtherSkillsText2(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />
                                        <br />

                                        <FormLabel>Interview by Training Centre EA</FormLabel>
                                        <Grid>
                                            <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                                <Grid item xs={3}><Typography>Care of infants / children</Typography></Grid>
                                                <RadioGroup
                                                    value={infants3}
                                                    row
                                                    onChange={event => setInfants3(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                                <RadioGroup
                                                    value={infants4}
                                                    row
                                                    onChange={event => setInfants4(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                                <Grid item xs={3}>
                                                    <Textfield
                                                        name="infantstext"
                                                        label="Assessment / Observation"
                                                        value={infantsTextB}
                                                        onChange={event => setInfantsTextB(event.target.value)}
                                                    />
                                                </Grid>
                                            </div>
                                        </Grid>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>Care of Elderly</Typography></Grid>
                                            <RadioGroup
                                                value={careElderly3}
                                                row
                                                onChange={event => setCareElderly3(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={careElderly4}
                                                row
                                                onChange={event => setCareElderly4(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="careofelderlytext"
                                                    label="Assessment / Observation"
                                                    value={careElderlyTextB}
                                                    onChange={event => setCareElderlyTextB(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>Care of disabled</Typography></Grid>
                                            <RadioGroup
                                                value={careDisabled3}
                                                row
                                                onChange={event => setCareDisabled3(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={careDisabled4}
                                                row
                                                onChange={event => setCareDisabled4(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="careofdisabledtext"
                                                    label="Assessment / Observation"
                                                    value={careDisabledTextB}
                                                    onChange={event => setCareDisabledTextB(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>General Housework</Typography></Grid>
                                            <RadioGroup
                                                value={genHouse3}
                                                row
                                                onChange={event => setGenHouse3(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={genHouse4}
                                                row
                                                onChange={event => setGenHouse4(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="generalhouseworktext"
                                                    label="Assessment / Observation"
                                                    value={genHouseTextB}
                                                    onChange={event => setGenHouseTextB(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>Cooking</Typography></Grid>
                                            <RadioGroup
                                                value={cooking3}
                                                row
                                                onChange={event => setCooking3(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={cooking4}
                                                row
                                                onChange={event => setCooking4(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="cookingtext"
                                                    label="Assessment / Observation"
                                                    value={cookingTextB}
                                                    onChange={event => setCookingTextB(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}>
                                                <Typography>Language Abilities</Typography>
                                                <Textfield
                                                    name="languageabilitiestext1"
                                                    label="Language Abilities"
                                                    value={langText3}
                                                    onChange={event => setLangText3(event.target.value)}
                                                />
                                            </Grid>
                                            <RadioGroup
                                                value={lang3}
                                                row
                                                onChange={event => setLang3(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={lang4}
                                                row
                                                onChange={event => setLang4(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="languageabilitiestext2"
                                                    label="Assessment / Observation"
                                                    value={langText4}
                                                    onChange={event => setLangText4(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}>
                                                <Typography>Other Skills</Typography>
                                                <Textfield
                                                    name="otherskillstext1"
                                                    label="Other Skills"
                                                    value={otherSkillsText3}
                                                    onChange={event => setOtherSkillsText3(event.target.value)}
                                                />
                                            </Grid>
                                            <RadioGroup
                                                value={otherSkills3}
                                                row
                                                onChange={event => setOtherSkills3(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={otherSkills4}
                                                row
                                                onChange={event => setOtherSkills4(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="otherskillstext2"
                                                    label="Assessment / Observation"
                                                    value={otherSkillsText4}
                                                    onChange={event => setOtherSkillsText4(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />
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

export default Third;