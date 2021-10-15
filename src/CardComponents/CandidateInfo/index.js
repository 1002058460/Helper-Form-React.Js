import React from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ModalWindow from './ModalWindow';
import ModalBiodata from './ModalBiodata';

export default class CandidateInfo extends React.Component {
    state = {
        persons: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/alexcandidate`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        const { persons } = this.state
        return (
            <Container component="main">
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                    <Grid container>
                        <img className="roundimg" src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}></img>

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
                        <div style={{ marginLeft: "200px" }}>
                            <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe></div>
                    </Grid>
                    <div style={{ marginTop: "-150px" }}>
                        <Grid item xs={6}>
                            <Typography>
                            <Button variant="outlined">Download</Button>
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
                                <Stack spacing={2} direction="row">
                                <ModalWindow />
                                <ModalBiodata />
                                </Stack>
                            </Typography>
                        </Grid>
                    </div>
                </Paper>

            </Container>
        )
    }
}
