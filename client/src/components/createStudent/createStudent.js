import React,{useState} from 'react';
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";


const useStyles=makeStyles(()=>({
    root:{
        '& > *':{
           
            width:'25ch',
        },
    },

}));

export default function CreateStudent() {
    const classes =useStyles();
    const[student,setStudent]=useState({
        regNo: 0,
        studentName: '',
        grade:'',
        section:''

    });

const createStudent=()=>{
    axios.post('https://student-records-crud.herokuapp.com/students',student).then(()=>{
      window.location.reload(false);
    })
}

  return (
    <>
    <h2>Create Student</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      id="outlined-basic" 
      label="Reg No." 
      variant="outlined" 
      value={student.regNo} 
      onChange={(event)=>{
        setStudent({ ...student,regNo:event.target.value})
      }}/>
   
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event)=>{
        setStudent({ ...student,studentName:event.target.value})
      }}/>
      
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event)=>{
        setStudent({ ...student,grade:event.target.value})
      }}/>
      
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event)=>{
        setStudent({ ...student,section:event.target.value})
      }}/>
   
      
      <Button variant="contained" color="primary" onClick={createStudent}>Create</Button>
    </form>
    </>
  );
}
