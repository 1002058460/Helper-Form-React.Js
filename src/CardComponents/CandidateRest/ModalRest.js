import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from 'axios';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
    display: 'block'
};

export default function ModalRest(props) {
    const { candidateRest, setCandidateRest } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [preference, setPreference] = React.useState('');
    const [remarkFood, setRemar] = React.useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        await axios.put(`http://localhost:5001/alexmedical/${candidateRest.id}`, {
            preference, remarkFood
        })
            .then(res => {
                console.log(res.data)

                const result = res.data;
                setCandidateRest(result);

                setOpen(false);
            })
    }

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>EDIT MEDICAL HISTORY</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        EDIT MEDICAL HISTORY
                    </Typography>
                    <br />
                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <TextField
                                name="rest"
                                label="Preference for Rest Day per month"
                                value={preference}
                                fullWidth="true"
                                onChange={event => setPreference(event.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                name="remar"
                                label="Remarks"
                                value={remarkFood}
                                fullWidth="true"
                                onChange={event => setRemar(event.target.value)}
                            />
                        </Grid>
                        <br />
                        <Stack spacing={2} direction="row">
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained" onClick={handleSubmit}>Save</Button>
                        </Stack>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}