import React, { useState } from 'react'
import EmployeeForm from "./EmployeeForm";
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./Components/useTable";
import * as employeeService from "./services/employeeService";
import Controls from "./Components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import Popup from "./Components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    { id: 'country', label: 'COUNTRY' },
    { id: 'employer', label: 'EMPLOYER' },
    { id: 'workduties', label: 'WORK DUTIES' },
    { id: 'remark', label: 'REMARK' },
    { id: 'year', label: 'YEAR'},
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Employees() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            employeeService.insertEmployee(employee)
        else
            employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
        <>
            <Paper className={classes.pageContent}>

                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.country}</TableCell>
                                    <TableCell>{item.employer}</TableCell>
                                    <TableCell>{item.workduties}</TableCell>
                                    <TableCell>{item.remark}</TableCell>
                                    <TableCell>{item.startDate} - {item.endDate}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary">
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
                <Toolbar>
                    <Controls.Button
                        text="Add Employment"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
            </Paper>
            <Popup
                title="Employment History Overseas"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
        </>
    )
}
