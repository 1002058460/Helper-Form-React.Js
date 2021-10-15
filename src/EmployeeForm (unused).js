import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./Components/controls/Controls";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useForm, Form } from './Components/useForm';
import * as employeeService from "./services/employeeService";

// const initialFValues = {
//     id: 0,
//     country: '',
//     employer: '',
//     workduties: '',
//     remark: '',
//     startDate: new Date(),
//     endDate: new Date()
// }

const EmployeeForm = (props) => {
    // const { addOrEdit, recordForEdit } = props

    const { yearStart, setYearStart } = props;
    const { yearEnd, setYearEnd } = props;
    const { country, setCountry } = props;
    const { employer, setEmployer } = props;
    const { workDuties, setWorkDuties } = props;
    const { remarks, setRemarks } = props;

    // const validate = (fieldValues = values) => {
    //     let temp = { ...errors }
    //     if ('country' in fieldValues)
    //         temp.country = fieldValues.country ? "" : "This field is required."
    //     if ('employer' in fieldValues)
    //         temp.employer = fieldValues.employer ? "" : "This field is required."
    //     if ('workduties' in fieldValues)
    //         temp.workduties = fieldValues.workduties ? "" : "This field is required."
    //     setErrors({
    //         ...temp
    //     })

    //     if (fieldValues == values)
    //         return Object.values(temp).every(x => x == "")
    // }

    // const {
    //     values,
    //     setValues,
    //     errors,
    //     setErrors,
    //     handleInputChange,
    //     resetForm
    // } = useForm(initialFValues, true);

    const handleSubmit = e => {
        e.preventDefault()
        // if (validate()) {
        //     addOrEdit(values, resetForm);
        // }
    }

    // useEffect(() => {
    //     if (recordForEdit != null)
    //         setValues({
    //             ...recordForEdit
    //         })
    // }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                name="yearStart"
                label={yearStart}
                views={["year"]}
                format="yyyy"
                value={yearStart}
                onChange={event => setYearStart(event.target.value)}

            />
        </MuiPickersUtilsProvider>
                    
                    </Grid>
                    <Grid item xs={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                name="yearEnd"
                label={yearEnd}
                views={["year"]}
                format="yyyy"
                value={yearEnd}
                onChange={event => setYearEnd(event.target.value)}

            />
        </MuiPickersUtilsProvider>
                    
                    </Grid>
                    <Grid item xs={3}>
                    <Controls.Input
                        name="country"
                        label="Country"
                        value={country}
                        onChange={event => setCountry(event.target.value)}

                    />
                    </Grid>
                    <Grid item xs={3}>
                    <Controls.Input
                        label="Employer"
                        name="employer"
                        value={employer}
                        onChange={event => setEmployer(event.target.value)}
                    />
                    </Grid>
            <Grid item xs={6}>
                    <Controls.Input
                        label="Work Duties"
                        name="workduties"
                        multiline={true}
                        rows={4}
                        value={workDuties}
                        onChange={event => setWorkDuties(event.target.value)}
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <Controls.Input
                        label="Remarks"
                        name="remarks"
                        multiline={true}
                        rows={4}
                        value={remarks}
                        onChange={event => setRemarks(event.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Add" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            // onClick={resetForm}
                             />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm;