import React, { useEffect } from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ModalProfile from './ModalProfile';


export default function CandidateProfile() {

    const [candidateProfile, setCandidateProfile] = React.useState('');

    useEffect(() => {

        const loadData = async () => {
            await axios.get(`http://localhost:5001/alexcandidate`)
                .then(res => {
                    const candidateProfile = res.data;
                    setCandidateProfile(candidateProfile);
                });
        }

        loadData();

    }, []);
    return (
        <Container component="main">

            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h6">Profile</Typography>
                <Typography>
                    <hr />
                    <table>
                        <tr>
                            <td><b>Height</b></td>
                            <td>{candidateProfile.height}</td>
                            <td><b>Education Level:</b></td>
                            <td>{candidateProfile.education}</td>

                        </tr>
                        <tr>
                            <td><b>Weight:</b></td>
                            <td>{candidateProfile.weight}</td>
                            <td><b>Number of Siblings:</b></td>
                            <td>{candidateProfile.siblings}</td>
                        </tr>
                        <tr>
                            <td><b>Nationality:</b></td>
                            <td>{candidateProfile.nationality}</td>
                            <td><b>Name of port/airport:</b></td>
                            <td>{candidateProfile.port}</td>
                        </tr>
                        <tr>
                            <td><b>Residential address:</b></td>
                            <td>{candidateProfile.address}</td>
                            <td><b>Age of children:</b></td>
                            <td>{candidateProfile.ageOfChildren}</td>
                        </tr>
                    </table>
                    <br />
                    <ModalProfile candidateProfile={candidateProfile} setCandidateProfile={setCandidateProfile} />
                </Typography>
            </Paper>

        </Container>
    )
}

