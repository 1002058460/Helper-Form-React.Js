import React, { useEffect } from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CandidateDoc from './CandidateDoc';
import CandidateInfo from './CandidateInfo';
import CandidateProfile from './CandidateProfile';
import CandidateRest from './CandidateRest';
import CandidateSkills from './CandidateSkills';
import CandidateMedic from './CandidateMedic';


export default function CandidateIndex() {

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
                    /{candidateProfile.fullName}
                </Typography>
                <div>
                    <Link to="/" underline="none">
                        <Button startIcon={<ArrowBackIcon />} >
                            Back
                        </Button>
                    </Link>
                </div>

                <CandidateInfo />
                <CandidateProfile />
                <CandidateMedic />
                <CandidateRest />
                <CandidateSkills />
                <CandidateDoc />
            </Container>
        )
    }

