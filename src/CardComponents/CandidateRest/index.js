import React, { useEffect } from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ModalRest from './ModalRest';

export default function CandidateRest() {

    const [candidateRest, setCandidateRest] = React.useState('');

    useEffect(() => {

        const loadData = async () => {
            await axios.get(`http://localhost:5001/alexmedical`)
                .then(res => {
                    const candidateRest = res.data;
                    setCandidateRest(candidateRest);
                });
        }

        loadData();

    }, []);
    return (
        <Container component="main">

            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h6">Rest Day</Typography>
                <Typography>
                    <hr />
                    <div class="row">
                        <div class="column">
                            <table>
                                <tr>
                                    <td><b>Preference for rest day per month:</b></td>
                                    <td>{candidateRest.preference}</td>
                                    <td><b>Others Remarks</b></td>
                                    <td>{candidateRest.remarkFood}</td>
                                </tr>
                            </table>
                            <br />
                            <ModalRest candidateRest={candidateRest} setCandidateRest={setCandidateRest} />
                        </div>
                    </div>
                </Typography>
            </Paper>

        </Container>
    )
}

