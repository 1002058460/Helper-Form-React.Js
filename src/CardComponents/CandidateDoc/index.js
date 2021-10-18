import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import AddIcon from '@material-ui/icons/Add';


export default class CandidateDoc extends React.Component {
    render() {
        return (
            <Container component="main">
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h6">Candidate Documents</Typography>
                    <Typography color="text.secondary">
                        <hr />
                        You can upload up to 5 documents<br /><br />
                        <Button startIcon={<AddIcon />}>
                            Add Document
                        </Button>
                    </Typography>
                </Paper>
            </Container>
        )
    }
}
