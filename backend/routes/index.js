import express from 'express';
import { addTask, getTasks, getTask, updateTask, updateStatus, deleteTask} from '../controllers/taskController.js';
const router = express.Router();

router
    .post('/', addTask)
    .get('/', getTasks)
    .get('/:id', getTask)
    .put('/:id', updateTask)
    .patch('/:id/status', updateStatus)
    .delete('/:id', deleteTask);

export default router;