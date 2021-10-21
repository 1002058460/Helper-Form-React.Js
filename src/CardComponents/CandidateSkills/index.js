import React, { useEffect } from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ModalSkills from './ModalSkills';


export default function CandidateSkills() {

    const [candidateSkillsSEA, setCandidateSkillsSEA] = React.useState('');
    const [candidateSkillsTCEA, setCandidateSkillsTCEA] = React.useState('');

    useEffect(() => {

        const loadData = async () => {
            await axios.get(`http://localhost:5001/alexskillsSEA`)
                .then(res => {
                    const candidateSkillsSEA = res.data;
                    setCandidateSkillsSEA(candidateSkillsSEA);
                });
            axios.get(`http://localhost:5001/alexskillsTCEA`)
                .then(res => {
                    const candidateSkillsTCEA = res.data;
                    setCandidateSkillsTCEA(candidateSkillsTCEA);
                });
        }

        loadData();

    }, []);
    return (
        <Container component="main">

            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h6">Skills of FDW</Typography>
                <Typography>
                    <hr />
                    <div class="row">
                        <div class="column">
                            Areas of work (interview by Singapore EA)
                            <table>
                                <ul>
                                    <li><b>Care of infants / children</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsSEA.infants1}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsSEA.infants2}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsSEA.infantsText}</td>
                                    </tr>
                                    <li><b>Care of Elderly</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsSEA.careElderly1}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsSEA.careElderly2}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsSEA.careElderlyText}</td>
                                    </tr>
                                    <li><b>Care of disabled</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsSEA.careDisabled1}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsSEA.careDisabled2}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsSEA.careDisabledText}</td>
                                    </tr>
                                    <li><b>General Housework</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsSEA.genHouse1}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsSEA.genHouse2}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsSEA.genHouseText}</td>
                                    </tr>
                                    <li><b>Cooking</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsSEA.cooking1}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsSEA.cooking2}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsSEA.cookingText}</td>
                                    </tr>
                                    <li><b>Language Abilities (Specify: )</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsSEA.lang1}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsSEA.lang2}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsSEA.langText1}</td>
                                    </tr>
                                    <li><b>Other Skills (Specify: )</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsSEA.otherSkills1}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsSEA.otherSkills2}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsSEA.otherSkillsText1}</td>
                                    </tr>
                                </ul>
                            </table>
                        </div>
                        <div class="column">
                            Areas of work (interview by Training Centre EA)
                            <table>
                                <ul>
                                    <li><b>Care of infants / children</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsTCEA.infants3}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsTCEA.infants4}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsTCEA.infantsTextB}</td>
                                    </tr>
                                    <li><b>Care of Elderly</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsTCEA.careElderly3}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsTCEA.careElderly4}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsTCEA.careElderlyTextB}</td>
                                    </tr>
                                    <li><b>Care of disabled</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsTCEA.careDisabled3}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsTCEA.careDisabled4}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsTCEA.careDisabledTextB}</td>
                                    </tr>
                                    <li><b>General Housework</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsTCEA.genHouse3}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsTCEA.genHouse4}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsTCEA.genHouseTextB}</td>
                                    </tr>
                                    <li><b>Cooking</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsTCEA.cooking3}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsTCEA.cooking4}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsTCEA.cookingTextB}</td>
                                    </tr>
                                    <li><b>Language Abilities (Specify: )</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsTCEA.lang3}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsTCEA.lang4}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsTCEA.langText3}</td>
                                    </tr>
                                    <li><b>Other Skills (Specify: )</b></li>
                                    <tr>
                                        <td>Willingness:</td>
                                        <td>{candidateSkillsTCEA.otherSkills3}</td>
                                    </tr>
                                    <tr>
                                        <td>Experience:</td>
                                        <td>{candidateSkillsTCEA.otherSkills4}</td>

                                    </tr>
                                    <tr>
                                        <td>Assessment / Observation:</td>
                                        <td>{candidateSkillsTCEA.otherSkillsText3}</td>
                                    </tr>
                                </ul>
                            </table>

                        </div>
                    </div>
                    <br />
                    <ModalSkills
                        candidateSkillsSEA={candidateSkillsSEA} setCandidateSkillsSEA={setCandidateSkillsSEA}
                        candidateSkillsTCEA={candidateSkillsTCEA} setCandidateSkillsTCEA={setCandidateSkillsTCEA}
                    />
                </Typography>
            </Paper>

        </Container>
    )
}

