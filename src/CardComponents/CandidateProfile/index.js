import React from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ModalProfile from './ModalProfile';


export default class CandidateProfile extends React.Component {
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
                        <br/>
                        <ModalProfile />
                    </Typography>
                </Paper>

            </Container>
        )
    }
}
