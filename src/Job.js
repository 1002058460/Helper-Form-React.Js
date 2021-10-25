
import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchBar from "material-ui-search-bar";
import TextField from '@mui/material/TextField';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Drawer from "@material-ui/core/Drawer";
import FontDownloadIcon from '@mui/icons-material/FontDownload';

const App = () => {
    const [candidate, setCandidate] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchId, setSearchId] = useState("");
    const [searchAgency, setSearchAgency] = useState("");
    const [searchDate, setSearchDate] = useState("");


    const getCandidateData = async () => {
        try {
            const data = await axios.get(
                "http://localhost:5001/candidate"
            );
            console.log(data.data);
            setCandidate(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getCandidateData();
    }, []);
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
                <b>Job Order Page</b>
            </Typography>
            <Typography color="text.secondary">
                Displays the data of all Documents
            </Typography>
            <Paper variant="outlined" className="scroll" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>CANDIDATE CODE
                                    <br />
                                    <TextField
                                        onChange={(e) => {
                                            setSearchId(e.target.value);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>AGENCY NAME
                                    <br />
                                    <TextField
                                        onChange={(e) => {
                                            setSearchAgency(e.target.value);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>FDW NAME
                                    <br />
                                    <TextField
                                        onChange={(e) => {
                                            setSearchName(e.target.value);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>DATE / TIME
                                    <br />
                                    <TextField
                                        onChange={(e) => {
                                            setSearchDate(e.target.value);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>ACTION
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {candidate
                                .filter((item) => {
                                    if (searchName == "") {
                                        if (searchAgency == "") {
                                            if (searchId == "") {
                                                if (searchDate == "") {
                                                    return item;
                                                }
                                                else if (
                                                    item.createdAt.toLowerCase().includes(searchDate.toLowerCase())
                                                ) {
                                                    return item;
                                                }
                                            }
                                            else if (
                                                item.id.toLowerCase().includes(searchId.toLowerCase())
                                            ) {
                                                return item;
                                            }
                                        }
                                        else if (
                                            item.address.toLowerCase().includes(searchAgency.toLowerCase())
                                        ) {
                                            return item;
                                        }
                                    }
                                    else if (
                                        item.fullName.toLowerCase().includes(searchName.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                })
                                .map((item) => {
                                    return (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.address}</TableCell>
                                            <TableCell>{item.fullName}</TableCell>
                                            <TableCell>{item.createdAt}</TableCell>
                                            <TableCell><Link to="/CardComponents" underline="none">VIEW</Link></TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};

export default App;