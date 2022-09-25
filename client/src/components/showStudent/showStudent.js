import React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { makeStyles } from "@mui/styles";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles=makeStyles(()=>({
  root:{
      '& > *':{
          
          width:'25ch',
      },
  },

}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function ShowStudent() {
  const classes = useStyles();
  const [studentsList,setStudentList]= useState([])
  const deleteStudent=(id)=>{
    axios.delete(`https://student-records-crud.herokuapp.com/students/${id}`).then(()=>{
      window.location.reload(false);
    }
    )
  }
  useEffect(()=>{
    axios.get('https://student-records-crud.herokuapp.com/students').then((allStudents)=>{
      setStudentList(allStudents.data);
    })
  },[])

  return (
    <>

    <h2>All Students</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Reg No.</StyledTableCell>
            <StyledTableCell align="right">Grade</StyledTableCell>
            <StyledTableCell align="right">Section</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student,key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {student.studentName}
              </StyledTableCell>
              <StyledTableCell align="right">{student.regNo}</StyledTableCell>
              <StyledTableCell align="right">{student.grade}</StyledTableCell>
              <StyledTableCell align="right">{student.section}</StyledTableCell>
              <StyledTableCell align="right">
              <IconButton aria-label="delete" size="small" onClick={()=>deleteStudent(student._id)}>
                <DeleteIcon fontSize="small" />
                </IconButton>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
  );
}
