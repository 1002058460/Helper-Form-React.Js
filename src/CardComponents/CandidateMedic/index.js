import React, { useEffect } from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ModalMedic from './ModalMedic';

export default function CandidateMedic() {

    const [candidateMedic, setCandidateMedic] = React.useState('');

    useEffect(() => {

        const loadData = async () => {
            await axios.get(`http://localhost:5001/alexmedical`)
                .then(res => {
                    const candidateMedic = res.data;
                    setCandidateMedic(candidateMedic);
                });
        }

        loadData();

    }, []);
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
                                    <td>{candidateMedic.allergies}</td>
                                </tr>
                                <b>Past and Existing Illness</b>
                                <tr>
                                    <td>Mental Illness:</td>
                                    <td>{candidateMedic.mentalIllness}</td>
                                    <td>Tubercolosis:</td>
                                    <td>{candidateMedic.tubercolosis}</td>
                                </tr>
                                <tr>
                                    <td>Epilepsy:</td>
                                    <td>{candidateMedic.epilepsy}</td>
                                    <td>Heart Disease:</td>
                                    <td>{candidateMedic.heartDisease}</td>
                                </tr>
                                <tr>
                                    <td>Asthma:</td>
                                    <td>{candidateMedic.asthma}</td>
                                    <td>Malaria:</td>
                                    <td>{candidateMedic.malaria}</td>
                                </tr>
                                <tr>
                                    <td>Diabetes:</td>
                                    <td>{candidateMedic.diabetes}</td>
                                    <td>Operations:</td>
                                    <td>{candidateMedic.operations}</td>
                                </tr>
                                <tr>
                                    <td>Hypertension:</td>
                                    <td>{candidateMedic.hypertension}</td>
                                </tr>
                                <tr>
                                    <td><b>Others:</b></td>
                                    <td>{candidateMedic.otherIllness}</td>
                                </tr>
                                <tr>
                                    <td><b>Physical disabilities:</b></td>
                                    <td>{candidateMedic.disabilities}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="column">
                            <table>
                                <tr>
                                    <td><b>Dietary restrictions:</b></td>
                                    <td>{candidateMedic.diet}</td>
                                </tr>
                                <b>Food handling preferences</b>
                                <tr>
                                    <td>Pork:</td>
                                    <td>{candidateMedic.pork}</td>

                                </tr>
                                <tr>
                                    <td>Beef:</td>
                                    <td>{candidateMedic.beef}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <br />
                    <ModalMedic candidateMedic={candidateMedic} setCandidateMedic={setCandidateMedic} />
                </Typography>
            </Paper>
        </Container>
    )
}
