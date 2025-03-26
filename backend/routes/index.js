import express from 'express';
import { addTask, getTasks, getTask, updateTask, updateStatus, deleteTask} from '../controllers/taskController.js';
const router = express.Router();

// Routes for the endpoints and the functions that will be called when the endpoint is hit
router
    .post('/', addTask)
    .get('/', getTasks)
    .get('/:id', getTask)
    .put('/:id', updateTask)
    .patch('/:id/status', updateStatus)
    .delete('/:id', deleteTask);

export default router;