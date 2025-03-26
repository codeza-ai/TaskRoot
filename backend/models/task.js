import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id :{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    datetime: {
        type: Date,
        required: true
    },
    type :{
        type: String,
        required: false
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);
export default Task;