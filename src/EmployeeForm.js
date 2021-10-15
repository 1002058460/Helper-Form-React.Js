import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./Components/controls/Controls";
import { useForm, Form } from './Components/useForm';
import * as employeeService from "./services/employeeService";

const initialFValues = {
    id: 0,
    country: '',
    employer: '',
    workduties: '',
    remark: '',
    startDate: new Date(),
    endDate: new Date()
}

export default function EmployeeForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('country' in fieldValues)
            temp.country = fieldValues.country ? "" : "This field is required."
        if ('employer' in fieldValues)
            temp.employer = fieldValues.employer ? "" : "This field is required."
        if ('workduties' in fieldValues)
            temp.workduties = fieldValues.workduties ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={3}>
                <Controls.DatePicker
                        name="startDate"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <Controls.DatePicker
                        name="endDate"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <Controls.Input
                        name="country"
                        label="Country"
                        value={values.country}
                        onChange={handleInputChange}
                        error={errors.country}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <Controls.Input
                        label="Employer"
                        name="employer"
                        value={values.employer}
                        onChange={handleInputChange}
                        error={errors.employer}
                    />
                    </Grid>
            <Grid item xs={6}>
                    <Controls.Input
                        label="Work Duties"
                        name="workduties"
                        multiline={true}
                        rows={4}
                        value={values.workduties}
                        onChange={handleInputChange}
                        error={errors.workduties}
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <Controls.Input
                        label="Remarks"
                        name="remarks"
                        multiline={true}
                        rows={4}
                        value={values.remarks}
                        onChange={handleInputChange}
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
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
