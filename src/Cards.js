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
import AddIcon from '@material-ui/icons/Add';
import './style.css';
import PersonList from './CardComponents';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Drawer from "@material-ui/core/Drawer";
import FontDownloadIcon from '@mui/icons-material/FontDownload';


export default class List extends React.Component {
    state = {
        persons: [],
        newPersons: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/candidate`)
            .then(res => {

                const persons = res.data;

                const newPersons = persons.map(value => {

                    const birthDate = new Date(value.dateOfBirth);
                    const difference = Date.now() - birthDate.getTime();
                    const age = new Date(difference);

                    value.age = Math.abs(age.getUTCFullYear() - 1970);

                    return value;
                })
                this.setState({ newPersons });
            })
    }

    render() {
        return (
            <Container component="main">
                <Drawer
                    open="true"
                    variant="persistent"
                    anchor="left"
                >
                    <Container>
                        <Link to="/" underline="none"><FontDownloadIcon /></Link> <br />
                        <Link to="/Job" underline="none"><AccountBoxIcon /></Link>
                    </Container>
                </Drawer>
                <Typography component="h1" variant="h5">
                    <b>Helpers (Card View)</b>
                </Typography>
                <Typography color="text.secondary">
                    Displays the data of all helper with card view
                </Typography>

                <div align="right">
                    <Link to="/Main" underline="none"><Button startIcon={<AddIcon />} variant="contained">
                        add helper
                    </Button>
                    </Link>
                </div>
                <br />


                <Paper variant="outlined" className="scroll" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                    <Grid container spacing={3}>
                        {this.state.newPersons.map((person) => (
                            <Grid item md={3}>
                                <Card align="center">
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={person.photo}
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {person.fullName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: {person.id} | Age: {person.age}
                                            <div className="availability">{person.status}</div>
                                        </Typography>
                                    </CardContent>
                                    <CardActions className="thatButton">
                                        <Link to="/CardComponents" underline="none">
                                            <Button size="small">View More</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Paper>
            </Container>
        )
    }
}
