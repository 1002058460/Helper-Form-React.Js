import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    availability: {
        backgroundColor: '#ADD8E6',
        borderRadius: '25px',
        width: '80px',
        border: '2px solid #007fff',
        padding: '5px',
        color: '#007fff'
    },
    inactive: {
        backgroundColor: '#e2e5de',
        borderRadius: '25px',
        width: '80px',
        border: '2px solid #808080',
        padding: '5px',
        color: '#808080'
    },
    confirmed: {
        backgroundColor: '#a1dfb9',
        borderRadius: '25px',
        width: '80px',
        border: '2px solid #1f5a3b',
        padding: '5px',
        color: '#1f5a3b'
    },
    thatButton: {
        justifyContent: 'center',
    },
    scroll: {
        maxHeight: 500,
        overflow: 'auto',
    }
}));

export default function CardView() {
    const classes = useStyles();
    return (
        <Container component="main">
            <Typography component="h1" variant="h5">
                <b>Helpers (Card View)</b>
            </Typography>
            <Typography color="text.secondary">
                Displays the data of all helper with card view
            </Typography>
            <div align="right">
                <Button startIcon={<AddIcon />} href="/" variant="contained">
                    add helper
                </Button>
            </div>
            <Paper variant="outlined" className={classes.scroll} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                <Grid container spacing={3}>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image=""
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Jennifer Aniston
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 328988 | Age: 40
                                    <div className={classes.availability}>{"AVAILABLE"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://asset-besthelper.sgp1.cdn.digitaloceanspaces.com/assets/1631514389350.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5ZOGIPVI5NH7YDR3ALFS%2F20211008%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211008T024617Z&X-Amz-Expires=900&X-Amz-Signature=19b0cb7a539c5789e3ca6cf27475a1dbb2d0913e4a3212226dfab1a42a154930&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Nasir
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 100 | Age: 27
                                    <div className={classes.availability}>{"AVAILABLE"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://asset-besthelper.sgp1.cdn.digitaloceanspaces.com/assets/WhatsApp%20Image%202021-09-15%20at%2016.50.20%20%281%29.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5ZOGIPVI5NH7YDR3ALFS%2F20211008%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211008T024617Z&X-Amz-Expires=900&X-Amz-Signature=9b1df38ad25daed62df9a7ad41a621e800a876c5d4647075ffcd657d0d2e4229&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    David Yap
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 90930290 | Age: 33
                                    <div className={classes.availability}>{"AVAILABLE"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://asset-besthelper.sgp1.cdn.digitaloceanspaces.com/assets/WhatsApp%20Image%202021-09-15%20at%2016.50.20.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5ZOGIPVI5NH7YDR3ALFS%2F20211008%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211008T024617Z&X-Amz-Expires=900&X-Amz-Signature=a0efba67b14469cb597516a26d87304a4e7abe0cef281cf80726ab1449fe3d60&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Kate middleton
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 00199 | Age: 34
                                    <div className={classes.inactive}>{"INACTIVE"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://asset-besthelper.sgp1.cdn.digitaloceanspaces.com/assets/1631004619150.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5ZOGIPVI5NH7YDR3ALFS%2F20211008%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211008T045354Z&X-Amz-Expires=900&X-Amz-Signature=465fef9206cc8e94c08feadb2f15ca66012e48f52094c903b8aab7758c2ce278&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lola
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 009 | Age: 28
                                    <div className={classes.availability}>{"AVAILABLE"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image=""
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    qwdasda
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 123 | Age: 22
                                    <div className={classes.availability}>{"AVAILABLE"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://asset-besthelper.sgp1.cdn.digitaloceanspaces.com/assets/1630911059382.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5ZOGIPVI5NH7YDR3ALFS%2F20211008%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211008T045354Z&X-Amz-Expires=900&X-Amz-Signature=2edda947fd1a8986e7bee04cca64167dee03184ba0d2ed9253e6e535842c6801&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Abdullah 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 008 | Age: 27
                                    <div className={classes.availability}>{"AVAILABLE"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image=""
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Siti Fatimah
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 007 | Age: 28
                                    <div className={classes.confirmed}>{"CONFIRMED"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://asset-besthelper.sgp1.cdn.digitaloceanspaces.com/assets/1629943423793.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5ZOGIPVI5NH7YDR3ALFS%2F20211008%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211008T045359Z&X-Amz-Expires=900&X-Amz-Signature=970ce87b935e75a82f6e1f27b48fea62764549272e75700177b77096c137de4b&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Mark
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: ID-123456 | Age: 33
                                    <div className={classes.availability}>{"AVAILABLE"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card align="center">
                            <CardMedia
                                component="img"
                                height="400"
                                image=""
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lionel Messi
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1001 | Age: 26
                                    <div className={classes.availability}>{"AVAILABLE"}</div>
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.thatButton}>
                                <Button size="small">View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>


                </Grid>
            </Paper>
        </Container>
    );
}