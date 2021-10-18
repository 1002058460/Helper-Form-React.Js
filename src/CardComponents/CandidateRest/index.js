import React from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ModalRest from './ModalRest';

export default class CandidateRest extends React.Component {
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
                                <br/>
                        <ModalRest />
                            </div>
                        </div>
                    </Typography>
                </Paper>

            </Container>
        )
    }
}
