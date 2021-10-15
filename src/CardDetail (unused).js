import React from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './style.css';
import AddIcon from '@material-ui/icons/Add';


export default class PersonList extends React.Component {
    state = {
        persons: [],
        medic: [],
        skillsSEA: [],
        skillsTCEA: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/alexcandidate`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
        axios.get(`http://localhost:5001/alexmedical`)
            .then(res => {
                const medic = res.data;
                this.setState({ medic });
            })
        axios.get(`http://localhost:5001/alexskillsSEA`)
            .then(res => {
                const skillsSEA = res.data;
                this.setState({ skillsSEA });
            })
        axios.get(`http://localhost:5001/alexskillsTCEA`)
            .then(res => {
                const skillsTCEA = res.data;
                this.setState({ skillsTCEA });
            })
    }

    render() {
        const { persons } = this.state
        const { medic } = this.state
        const { skillsSEA } = this.state
        const { skillsTCEA } = this.state
        return (
            <Container component="main">
                <Typography component="h1" variant="h5">
                    <b>Helpers Detail</b>
                </Typography>
                <Typography color="text.secondary">
                    <Link to="/" underline="none">
                        Home
                    </Link>
                    /
                    <Link to="/" underline="none">
                        Candidates-card
                    </Link>
                    /{persons.fullName}
                </Typography>
                <div>
                    <Link to="/" underline="none">
                        <Button startIcon={<ArrowBackIcon />} >
                            Back
                        </Button>
                    </Link>
                </div>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                    <Grid container>
                        <img className="roundimg" src={persons.photo}></img>

                        <Typography component="h1" variant="h6">
                            <b style={{ marginLeft: "10px" }}>{persons.fullName}</b>
                        </Typography>

                        <Typography color="text.secondary">
                            <br />
                            <div style={{ marginBottom: "50px", marginLeft: "-40px", marginTop: "20px" }}>
                                ID: {persons.id}
                            </div>
                            <div className="skills">{persons.skills}</div>
                        </Typography>
                        <Typography>
                            <div className="availability">{persons.status}</div>
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography>
                            <hr />
                            <table>
                                <tr>
                                    <td><b>Passport status:</b></td>
                                    <td>{persons.passportStatus}</td>
                                    <td><b>Pocket Money:</b></td>
                                    <td>${persons.pocketMoney}</td>

                                </tr>
                                <tr>
                                    <td><b>Bio fee:</b></td>
                                    <td>${persons.bioFee}</td>
                                    <td><b>Minimum salary:</b></td>
                                    <td>${persons.minimumSalary}</td>
                                </tr>
                                <tr>
                                    <td><b>Loan:</b></td>
                                    <td>${persons.loan}</td>
                                    <td><b>Marital status:</b></td>
                                    <td>{persons.maritalStatus}</td>
                                </tr>
                                <tr>
                                    <td><b>Date of Birth:</b></td>
                                    <td>{persons.dateOfBirth}</td>
                                    <td><b>Experience in Sg:</b></td>
                                    <td>{persons.experienceInSG}</td>
                                </tr>
                                <tr>
                                    <td><b>Place of Birth:</b></td>
                                    <td>{persons.placeOfBirth}</td>
                                </tr>
                            </table>
                        </Typography>
                    </Grid>

                </Paper>

                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h6">Profile</Typography>
                    <Typography>
                        <hr />
                        <table>
                            <tr>
                                <td><b>Height</b></td>
                                <td>{persons.height}</td>
                                <td><b>Education Level:</b></td>
                                <td>{persons.education}</td>

                            </tr>
                            <tr>
                                <td><b>Weight:</b></td>
                                <td>${persons.weight}</td>
                                <td><b>Number of Siblings:</b></td>
                                <td>${persons.siblings}</td>
                            </tr>
                            <tr>
                                <td><b>Nationality:</b></td>
                                <td>{persons.nationality}</td>
                                <td><b>Name of port/airport:</b></td>
                                <td>{persons.port}</td>
                            </tr>
                            <tr>
                                <td><b>Residential address:</b></td>
                                <td>{persons.address}</td>
                                <td><b>Age of children:</b></td>
                                <td>{persons.ageOfChildren}</td>
                            </tr>
                        </table>
                    </Typography>
                </Paper>

                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h6">Medical History / Dietary Restrictions</Typography>
                    <Typography>
                        <hr />
                        <div class="row">
                            <div class="column">
                                <table>
                                    <tr>
                                        <td><b>Allergies:</b></td>
                                        <td>{medic.allergies}</td>
                                    </tr>
                                    <b>Past and Existing Illness</b>
                                    <tr>
                                        <td>Mental Illness:</td>
                                        <td>{medic.mentalIllness}</td>
                                        <td>Tubercolosis:</td>
                                        <td>{medic.tubercolosis}</td>
                                    </tr>
                                    <tr>
                                        <td>Epilepsy:</td>
                                        <td>{medic.epilepsy}</td>
                                        <td>Heart Disease:</td>
                                        <td>{medic.heartDisease}</td>
                                    </tr>
                                    <tr>
                                        <td>Asthma:</td>
                                        <td>{medic.asthma}</td>
                                        <td>Malaria:</td>
                                        <td>{medic.malaria}</td>
                                    </tr>
                                    <tr>
                                        <td>Diabetes:</td>
                                        <td>{medic.diabetes}</td>
                                        <td>Operations:</td>
                                        <td>{medic.operations}</td>
                                    </tr>
                                    <tr>
                                        <td>Hypertension:</td>
                                        <td>{medic.hypertension}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Others:</b></td>
                                        <td>{medic.otherIllness}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Physical disabilities:</b></td>
                                        <td>{medic.disabilities}</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="column">
                                <table>
                                    <tr>
                                        <td><b>Dietary restrictions:</b></td>
                                        <td>{medic.diet}</td>
                                    </tr>
                                    <b>Food handling preferences</b>
                                    <tr>
                                        <td>Pork:</td>
                                        <td>{medic.pork}</td>

                                    </tr>
                                    <tr>
                                        <td>Beef:</td>
                                        <td>{medic.beef}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Typography>
                </Paper>

                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h6">Rest Day</Typography>
                    <Typography>
                        <hr />
                        <div class="row">
                            <div class="column">
                                <table>
                                    <tr>
                                        <td><b>Preference for rest day per month:</b></td>
                                        <td>{medic.preference}</td>
                                        <td><b>Others Remarks</b></td>
                                        <td>{medic.remarkFood}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Typography>
                </Paper>

                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h6">Skills of FDW</Typography>
                    <Typography>
                        <hr />
                        <div class="row">
                            <div class="column">
                                Areas of work (interview by Singapore EA)
                                <table>
                                    <ul>
                                        <li><b>Care of infants / children</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.infants1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.infants2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.infantsText}</td>
                                        </tr>
                                        <li><b>Care of Elderly</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.careElderly1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.careElderly2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.careElderlyText}</td>
                                        </tr>
                                        <li><b>Care of disabled</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.careDisabled1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.careDisabled2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.careDisabledText}</td>
                                        </tr>
                                        <li><b>General Housework</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.genHouse1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.genHouse2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.genHouseText}</td>
                                        </tr>
                                        <li><b>Cooking</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.cooking1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.cooking2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.cookingText}</td>
                                        </tr>
                                        <li><b>Language Abilities (Specify: )</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.lang1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.lang2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.langText1}</td>
                                        </tr>
                                        <li><b>Other Skills (Specify: )</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.otherSkills1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.otherSkills2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.otherSkillsText1}</td>
                                        </tr>
                                    </ul>
                                </table>
                            </div>
                            <div class="column">
                                Areas of work (interview by Training Centre EA)
                                <table>
                                    <ul>
                                        <li><b>Care of infants / children</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.infants3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.infants4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.infantsTextB}</td>
                                        </tr>
                                        <li><b>Care of Elderly</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.careElderly3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.careElderly4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.careElderlyTextB}</td>
                                        </tr>
                                        <li><b>Care of disabled</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.careDisabled3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.careDisabled4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.careDisabledTextB}</td>
                                        </tr>
                                        <li><b>General Housework</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.genHouse3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.genHouse4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.genHouseTextB}</td>
                                        </tr>
                                        <li><b>Cooking</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.cooking3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.cooking4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.cookingTextB}</td>
                                        </tr>
                                        <li><b>Language Abilities (Specify: )</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.lang3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.lang4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.langText3}</td>
                                        </tr>
                                        <li><b>Other Skills (Specify: )</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.otherSkills3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.otherSkills4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.otherSkillsText3}</td>
                                        </tr>
                                    </ul>
                                </table>
                            </div>
                        </div>
                    </Typography>
                </Paper>

                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h6">Candidate Documents</Typography>
                    <Typography color="text.secondary">
                        <hr />
                        You can upload up to 5 documents<br /><br />
                        <Button startIcon={<AddIcon />}>
                            Add Document
                        </Button>
                    </Typography>
                </Paper>
            </Container>
        )
    }
}
