import express from "express";
import { getStudents, createStudent, deleteStudent } from "../controllers/student.js";

import student from '../models/student.js';
const router = express.Router();
//Routes are created and exported
//then controllers are made for each route to 
//manage code properly and call function

router.get('/',getStudents);
router.post('/',createStudent);
router.delete('/:id',deleteStudent);
//these are used in server/index.js


export default router;