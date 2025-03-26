import React, { useEffect, useState } from 'react'
import Task from "./Task";
import axios from "axios";

const AllTasks = ({allTasks = []}) => {
    const [filter, setFilter] = useState("all-tasks");
    const [tasks, setTasks] = useState([]);

    async function changeStatus(id){
        try{
            console.log('Updating status for task:', id);
            const response = await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${id}/status`);
            const updatedTask = response.data;
            console.log('Status update response:', updatedTask);
            
            // Update the tasks list with the updated task
            setTasks(tasks.map(task => 
                task.id === id ? updatedTask : task
            ));
        } catch(err){
            console.error('Error updating task status:', err);
            console.error('Error details:', err.response?.data);
            alert('Failed to update task status. Please try again.');
        }
    }

    async function deleteTask(id){
        try{
            console.log('Attempting to delete task with ID:', id);
            console.log('Current tasks:', tasks);
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
            const res = response.data;
            console.log('Delete response:', res);
            // Update the tasks list after successful deletion
            setTasks(tasks.filter(task => task.id !== id));
        } catch(err){
            console.error('Error deleting task:', err);
            console.error('Error details:', err.response?.data);
            alert('Failed to delete task. Please try again.');
        }
    }

    async function updateTask(id, editedTask){
        try{
            const res = await axios.put(`${import.meta.env.VITE_API_URL}/tasks/${id}`, editedTask);
            alert(res.data.message);
            if(res.status === 200){
                setTasks(tasks.map(task => 
                    task.id === id ? { ...task, ...editedTask } : task
                ));
            }
        }catch(err){
            console.error('Error updating task:', err);
            alert('Failed to update task. Please try again.');
        }
    }

    useEffect(() => {
        // Ensure allTasks is an array before filtering
        const tasksToFilter = Array.isArray(allTasks) ? allTasks : [];
        console.log('Received tasks:', tasksToFilter);
        
        const filteredTasks = tasksToFilter.filter(task => {
            if (filter === "all-tasks") return true;
            return task.type === filter;
        });
        console.log('Filtered tasks:', filteredTasks);
        setTasks(filteredTasks);
    }, [allTasks, filter]);

    return (
        <div className='flex flex-col bg-white rounded-md'>
            <div className='w-full mb-5 flex justify-end px-4 border-2 rounded-md border-gray-100'>
                <div className='p-4 gap-4 text-lg font-bold flex w-full justify-between'>
                    <input type="text bg-none" className='w-full px-4' placeholder='Search a task...'/>
                    <button className='cursor-pointer p-2 px-4 text-white bg-[#0795d7] rounded-md'>Search</button>
                </div>
                <select 
                    className='rounded-md p-2 w-30 text-lg'
                    name="filter" 
                    id="type" 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all-tasks">All tasks</option>
                    <option value="work">Work</option>
                    <option value="private">Private</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div className="tasks-container flex flex-col gap-2">
                {tasks.map((task) => (
                    <Task key={task.id} task={task} changeStatus={changeStatus} onDelete={deleteTask} onUpdate={updateTask} />
                ))}
            </div>
        </div>
    )
}

export default AllTasks;
