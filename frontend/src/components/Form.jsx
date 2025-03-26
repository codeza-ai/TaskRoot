import React from 'react'
import axios from "axios";
const Form = () => {
    async function onSubmit(e){
        e.preventDefault();
        const task = {
            id: crypto.randomUUID().toString(),
            title: e.target["title"].value.trim(),
            description: e.target["description"].value.trim(),
            type: e.target["type"].value,
            isCompleted: false,
            datetime: new Date()
        };

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, task);
            alert(res.data.message);
            e.target.reset();
        } catch(err){
            console.error('Error adding task:', err);
            alert(err.response?.data?.message || 'Failed to add task. Please try again.');
        }
    }
    return (
        <form
            onSubmit={onSubmit}
            className="text-xl text-black font-medium w-xl">
            <div className="space-y-2 w-full flex flex-col gap-2">
                <label htmlFor="title">Title<span className='text-red-500'>*</span>:</label>
                <input required type="text" id="title" name="title" className="border border-black rounded-md p-2" />

                <label htmlFor="type">Type<span className='text-red-500'>*</span>:</label>
                <select required name="type" id="type" className="border border-black rounded-md p-2">
                    <option value="">select-type</option>
                    <option value="work">Work</option>
                    <option value="private">Private</option>
                    <option value="others">Other</option>
                </select>

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" className="border border-black rounded-md p-2" />
            </div>
            <div className='flex justify-center gap- mt-10 p-4 gap-4'>
                <button type='submit' className='cursor-pointer px-8 p-4 text-xl text-white rounded-md bg-[#0795d7]'>Add Task</button>
                <button type='reset' className='cursor-pointer px-8 p-4 text-xl text-white rounded-md bg-black'>Clear Form</button>
            </div>
        </form>
    )
}

export default Form;
