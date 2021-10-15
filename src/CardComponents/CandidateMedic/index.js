import React from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default class PersonList extends React.Component {
    state = {
        medic: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/alexmedical`)
            .then(res => {
                const medic = res.data;
                this.setState({ medic });
            })
    }

    render() {
        const { medic } = this.state
        return (
            <Container component="main">
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
                        <br/>
                        <Button variant="contained">Edit</Button>
                    </Typography>
                </Paper>
            </Container>
        )
    }
}
