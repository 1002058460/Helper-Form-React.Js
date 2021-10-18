import React from 'react';

import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ModalSkills from './ModalSkills';


export default class CandidateSkills extends React.Component {
    state = {
        skillsSEA: [],
        skillsTCEA: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:5001/alexskillsSEA`)
            .then(res => {
                const skillsSEA = res.data;
                this.setState({ skillsSEA });
            })
        axios.get(`http://localhost:5001/alexskillsTCEA`)
            .then(res => {
                const skillsTCEA = res.data;
                this.setState({ skillsTCEA });
            })
    }

    render() {
        const { skillsSEA } = this.state
        const { skillsTCEA } = this.state
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
                                            <td>{skillsSEA.infants1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.infants2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.infantsText}</td>
                                        </tr>
                                        <li><b>Care of Elderly</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.careElderly1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.careElderly2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.careElderlyText}</td>
                                        </tr>
                                        <li><b>Care of disabled</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.careDisabled1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.careDisabled2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.careDisabledText}</td>
                                        </tr>
                                        <li><b>General Housework</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.genHouse1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.genHouse2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.genHouseText}</td>
                                        </tr>
                                        <li><b>Cooking</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.cooking1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.cooking2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.cookingText}</td>
                                        </tr>
                                        <li><b>Language Abilities (Specify: )</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.lang1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.lang2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.langText1}</td>
                                        </tr>
                                        <li><b>Other Skills (Specify: )</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsSEA.otherSkills1}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsSEA.otherSkills2}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsSEA.otherSkillsText1}</td>
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
                                            <td>{skillsTCEA.infants3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.infants4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.infantsTextB}</td>
                                        </tr>
                                        <li><b>Care of Elderly</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.careElderly3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.careElderly4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.careElderlyTextB}</td>
                                        </tr>
                                        <li><b>Care of disabled</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.careDisabled3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.careDisabled4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.careDisabledTextB}</td>
                                        </tr>
                                        <li><b>General Housework</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.genHouse3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.genHouse4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.genHouseTextB}</td>
                                        </tr>
                                        <li><b>Cooking</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.cooking3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.cooking4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.cookingTextB}</td>
                                        </tr>
                                        <li><b>Language Abilities (Specify: )</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.lang3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.lang4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.langText3}</td>
                                        </tr>
                                        <li><b>Other Skills (Specify: )</b></li>
                                        <tr>
                                            <td>Willingness:</td>
                                            <td>{skillsTCEA.otherSkills3}</td>
                                        </tr>
                                        <tr>
                                            <td>Experience:</td>
                                            <td>{skillsTCEA.otherSkills4}</td>

                                        </tr>
                                        <tr>
                                            <td>Assessment / Observation:</td>
                                            <td>{skillsTCEA.otherSkillsText3}</td>
                                        </tr>
                                    </ul>
                                </table>
                                
                            </div>
                        </div>
                        <br/>
                        <ModalSkills />
                    </Typography>
                </Paper>

            </Container>
        )
    }
}
