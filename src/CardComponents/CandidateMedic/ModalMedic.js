import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import axios from 'axios';
import { autocompleteClasses } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel'

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
  overflow:'scroll',
  height:'90%',
  display:'block'
};

const radioStyle = {
  padding: '10px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
};

export default function ModalMedic() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allergies, setAllergies] = React.useState('');
  const [mental, setMental] = React.useState('no');
  const [epilepsy, setEpilepsy] = React.useState('no');
  const [asthma, setAsthma] = React.useState('no');
  const [diabetes, setDiabetes] = React.useState('no');
  const [hyper, setHyper] = React.useState('no');
  const [tbc, setTbc] = React.useState('no');
  const [heart, setHeart] = React.useState('no');
  const [malaria, setMalaria] = React.useState('no');
  const [operations, setOperations] = React.useState('no');
  const [othersIll, setOthersIll] = React.useState('');
  const [disabilities, setDisabilities] = React.useState('');
  const [diet, setDiet] = React.useState('');
  const [beef, setBeef] = React.useState('no');
  const [pork, setPork] = React.useState('no');
  const [othersFood, setOthersFood] = React.useState('');
  const [rest, setRest] = React.useState('');
  const [remar, setRemar] = React.useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        await axios.put(`http://localhost:5001/alexcandidate`, {
            // photo, linkVideo, fullName
        })
            .then(res => {
                console.log(res);
                console.log(res.data)
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
                    <br/>
                    <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <TextField
                                            name="allergies"
                                            label="Allergies"
                                            value={allergies}
                                            fullWidth= "true"
                                            onChange={event => setAllergies(event.target.value)}
                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Typography>Past And Existing Illness</Typography>
                                        <div sx={radioStyle}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Mental Illness</FormLabel>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={mental}
                                                    row
                                                    onChange={event => setMental(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        <div sx={radioStyle}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Epilepsy</FormLabel>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={epilepsy}
                                                    row
                                                    onChange={event => setEpilepsy(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        <div sx={radioStyle}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Asthma</FormLabel>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={asthma}
                                                    row
                                                    onChange={event => setAsthma(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        <div sx={radioStyle}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Diabetes</FormLabel>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={diabetes}
                                                    row
                                                    onChange={event => setDiabetes(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        <div sx={radioStyle}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Hypertension</FormLabel>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={hyper}
                                                    row
                                                    onChange={event => setHyper(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        <div sx={radioStyle}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Tubercolosis</FormLabel>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={tbc}
                                                    row
                                                    onChange={event => setTbc(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        <div sx={radioStyle}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Heart Disease</FormLabel>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={heart}
                                                    row
                                                    onChange={event => setHeart(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        <div sx={radioStyle}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Malaria</FormLabel>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={malaria}
                                                    row
                                                    onChange={event => setMalaria(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        <div sx={radioStyle}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Operations</FormLabel>
                                                <RadioGroup
                                                    defaultValue="no"
                                                    value={operations}
                                                    row
                                                    onChange={event => setOperations(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            name="othersill"
                                            label="Others"
                                            value={othersIll}
                                            fullWidth= "true"
                                            onChange={event => setOthersIll(event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            name="disability"
                                            label="Physical Disabilities"
                                            value={disabilities}
                                            fullWidth= "true"
                                            onChange={event => setDisabilities(event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            name="diet"
                                            label="Dietary Restrictions"
                                            value={diet}
                                            fullWidth= "true"
                                            onChange={event => setDiet(event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Food Handling Preferences</Typography>
                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Pork</FormLabel>
                                                <RadioGroup
                                                    defaultValue="yes"
                                                    value={pork}
                                                    row
                                                    onChange={event => setPork(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Beef</FormLabel>
                                                <RadioGroup
                                                    defaultValue="yes"
                                                    value={beef}
                                                    row
                                                    onChange={event => setBeef(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="othersfood"
                                            label="Others"
                                            value={othersFood}
                                            fullWidth= "true"
                                            onChange={event => setOthersFood(event.target.value)}
                                        />
                                    </Grid>

                  <br/>
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