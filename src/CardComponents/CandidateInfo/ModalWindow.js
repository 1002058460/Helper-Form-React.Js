import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalWindow(props) {

  const { candidateInfo, setCandidateInfo } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status, setStatus] = React.useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    await axios.put(`http://localhost:5001/alexcandidate/${candidateInfo.id}`, {
      status
    })
      .then(res => {
        console.log(res.data)

        const result = res.data;
        setCandidateInfo(result);

        setOpen(false);
      })
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Change Status</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change Status
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Change Status</InputLabel>
            <Select
              name="status"
              label="Status"
              value={status}
              onChange={event => setStatus(event.target.value)}
              required
            >
              <MenuItem value={"AVAILABLE"}>Available</MenuItem>
              <MenuItem value={"RESERVED"}>Reserved</MenuItem>
              <MenuItem value={"CONFIRMED"}>Confirmed</MenuItem>
              <MenuItem value={"INACTIVE"}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Stack spacing={2} direction="row">
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" onClick={handleSubmit}>Save</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}