import React, { useEffect, useState } from 'react';
import axios from "axios";
import AllTasks from '../components/AllTasks';

// import Search from 
const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function getTasks() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
                const tasks = response.data;
                setTasks(tasks);
                console.log("Here are all tasks");
                console.log(tasks);
                console.log("End");
            } catch (err) {
                console.log(err);
                alert('Some error occurred while fetching tasks');
            }
        }
        getTasks();
    }, []);

    return (
        <div className='flex flex-col p-5 min-w-3xl h-screen overflow-y-scroll'>
            <div className='flex justify-center text-4xl font-bold'>
                <h1 className='w-fit'>Your Tasks</h1>
            </div>
            <div className='mt-5'>
                <AllTasks allTasks={tasks}/>
            </div>
        </div>
    )
}

export default Tasks
