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

export default function ModalMedic() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [infants1, setInfants1] = React.useState('yes');
  const [infants2, setInfants2] = React.useState('yes');
  const [infantsText, setInfantsText] = React.useState('');
  const [careElderly1, setCareElderly1] = React.useState('yes');
  const [careElderly2, setCareElderly2] = React.useState('yes');
  const [careElderlyText, setCareElderlyText] = React.useState('');
  const [careDisabled1, setCareDisabled1] = React.useState('yes');
  const [careDisabled2, setCareDisabled2] = React.useState('yes');
  const [careDisabledText, setCareDisabledText] = React.useState('');
  const [genHouse1, setGenHouse1] = React.useState('yes');
  const [genHouse2, setGenHouse2] = React.useState('yes');
  const [genHouseText, setGenHouseText] = React.useState('');
  const [cooking1, setCooking1] = React.useState('yes');
  const [cooking2, setCooking2] = React.useState('yes');
  const [cookingText, setCookingText] = React.useState('');
  const [lang1, setLang1] = React.useState('yes');
  const [lang2, setLang2] = React.useState('yes');
  const [langText1, setLangText1] = React.useState('');
  const [langText2, setLangText2] = React.useState('');
  const [otherSkills1, setOtherSkills1] = React.useState('yes');
  const [otherSkills2, setOtherSkills2] = React.useState('yes');
  const [otherSkillsText1, setOtherSkillsText1] = React.useState('');
  const [otherSkillsText2, setOtherSkillsText2] = React.useState('');

  const [infants3, setInfants3] = React.useState('yes');
  const [infants4, setInfants4] = React.useState('yes');
  const [infantsTextB, setInfantsTextB] = React.useState('');
  const [careElderly3, setCareElderly3] = React.useState('yes');
  const [careElderly4, setCareElderly4] = React.useState('yes');
  const [careElderlyTextB, setCareElderlyTextB] = React.useState('');
  const [careDisabled3, setCareDisabled3] = React.useState('yes');
  const [careDisabled4, setCareDisabled4] = React.useState('yes');
  const [careDisabledTextB, setCareDisabledTextB] = React.useState('');
  const [genHouse3, setGenHouse3] = React.useState('yes');
  const [genHouse4, setGenHouse4] = React.useState('yes');
  const [genHouseTextB, setGenHouseTextB] = React.useState('');
  const [cooking3, setCooking3] = React.useState('yes');
  const [cooking4, setCooking4] = React.useState('yes');
  const [cookingTextB, setCookingTextB] = React.useState('');
  const [lang3, setLang3] = React.useState('yes');
  const [lang4, setLang4] = React.useState('yes');
  const [langText3, setLangText3] = React.useState('');
  const [langText4, setLangText4] = React.useState('');
  const [otherSkills3, setOtherSkills3] = React.useState('yes');
  const [otherSkills4, setOtherSkills4] = React.useState('yes');
  const [otherSkillsText3, setOtherSkillsText3] = React.useState('');
  const [otherSkillsText4, setOtherSkillsText4] = React.useState('');

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
                                        <FormLabel>Interview by Singapore EA</FormLabel>
                                        <Grid>
                                            <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                                <Grid item xs={3}><Typography>Care of infants / children</Typography></Grid>
                                                <RadioGroup
                                                    value={infants1}
                                                    row
                                                    onChange={event => setInfants1(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                                <RadioGroup
                                                    value={infants2}
                                                    row
                                                    onChange={event => setInfants2(event.target.value)}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                                <Grid item xs={3}>
                                                    <TextField
                                                        name="infantstext"
                                                        label="Assessment / Observation"
                                                        value={infantsText}
                                                        onChange={event => setInfantsText(event.target.value)}
                                                    />
                                                </Grid>
                                            </div>
                                        </Grid>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>Care of Elderly</Typography></Grid>
                                            <RadioGroup
                                                value={careElderly1}
                                                row
                                                onChange={event => setCareElderly1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={careElderly2}
                                                row
                                                onChange={event => setCareElderly2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <TextField
                                                    name="careofelderlytext"
                                                    label="Assessment / Observation"
                                                    value={careElderlyText}
                                                    onChange={event => setCareElderlyText(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>Care of disabled</Typography></Grid>
                                            <RadioGroup
                                                value={careDisabled1}
                                                row
                                                onChange={event => setCareDisabled1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={careDisabled2}
                                                row
                                                onChange={event => setCareDisabled2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <TextField
                                                    name="careofdisabledtext"
                                                    label="Assessment / Observation"
                                                    value={careDisabledText}
                                                    onChange={event => setCareDisabledText(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>General Housework</Typography></Grid>
                                            <RadioGroup
                                                value={genHouse1}
                                                row
                                                onChange={event => setGenHouse1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={genHouse2}
                                                row
                                                onChange={event => setGenHouse2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <TextField
                                                    name="generalhouseworktext"
                                                    label="Assessment / Observation"
                                                    value={genHouseText}
                                                    onChange={event => setGenHouseText(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}><Typography>Cooking</Typography></Grid>
                                            <RadioGroup
                                                value={cooking1}
                                                row
                                                onChange={event => setCooking1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={cooking2}
                                                row
                                                onChange={event => setCooking2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <TextField
                                                    name="cookingtext"
                                                    label="Assessment / Observation"
                                                    value={cookingText}
                                                    onChange={event => setCookingText(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}>
                                                <Typography>Language Abilities</Typography>
                                                <TextField
                                                    name="languageabilitiestext1"
                                                    label="Language Abilities"
                                                    value={langText1}
                                                    onChange={event => setLangText1(event.target.value)}
                                                />
                                            </Grid>
                                            <RadioGroup
                                                value={lang1}
                                                row
                                                onChange={event => setLang1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={lang2}
                                                row
                                                onChange={event => setLang2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <TextField
                                                    name="languageabilitiestext2"
                                                    label="Assessment / Observation"
                                                    value={langText2}
                                                    onChange={event => setLangText2(event.target.value)}
                                                />
                                            </Grid>
                                        </div>
                                        <hr />

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Grid item xs={3}>
                                                <Typography>Other Skills</Typography>
                                                <TextField
                                                    name="otherskillstext1"
                                                    label="Other Skills"
                                                    value={otherSkillsText1}
                                                    onChange={event => setOtherSkillsText1(event.target.value)}
                                                />
                                            </Grid>
                                            <RadioGroup
                                                value={otherSkills1}
                                                row
                                                onChange={event => setOtherSkills1(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <RadioGroup
                                                value={otherSkills2}
                                                row
                                                onChange={event => setOtherSkills2(event.target.value)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                            <Grid item xs={3}>
                                                <TextField
                                                    name="otherskillstext2"
                                                    label="Assessment / Observation"
                                                    value={otherSkillsText2}
                                                    onChange={event => setOtherSkillsText2(event.target.value)}
                                                />
                                            </Grid>
                                            </div>
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