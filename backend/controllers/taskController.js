import Task from "../models/task.js";

const addTask = async(req, res) => {
    const task = req.body;
    const newTask = new Task(task);
    try {
        await newTask.save();
        res.status(201).json({message: "Successfully added new task."});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const getTasks = async(req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getTask = async(req, res) => {
    try {
        const {id} = req.params;
        console.log('Looking for task with ID:', id);
        const task = await Task.findOne({ id: id });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateTask = async(req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findOne({ id: id });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        const updatedTask = await Task.findOneAndUpdate(
            { id: id },
            { ...req.body },
            { new: true, runValidators: true }
        );
        res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateStatus = async(req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findOne({ id: id });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        const updatedTask = await Task.findOneAndUpdate(
            { id: id },
            { isCompleted: !task.isCompleted },
            { new: true }
        );
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteTask = async(req, res) => {
    try {
        const {id} = req.params;
        console.log('Attempting to delete task with ID:', id);
        
        // First check if the task exists
        const task = await Task.findOne({ id: id });
        if (!task) {
            console.log('Task not found with ID:', id);
            return res.status(404).json({ message: "Task not found" });
        }
        
        console.log('Found task to delete:', task);
        const deletedTask = await Task.findOneAndDelete({ id: id });
        console.log('Deleted task:', deletedTask);
        
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error('Error in deleteTask:', error);
        res.status(500).json({ message: error.message });
    }
}

export { addTask, getTasks, getTask, updateTask, updateStatus, deleteTask };