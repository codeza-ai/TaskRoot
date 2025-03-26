import React, { useState } from 'react';

const Task = ({ task, onDelete, changeStatus, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ title: task.title, description: task.description });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async() => {
        await onUpdate(task.id, editedTask);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div id={task.id} className={`flex p-4 gap-4 ${task.isCompleted ? 'bg-gray-300' : 'bg-gray-50 hover:bg-gray-100'} rounded-md  transition-colors duration-150`}>
            <div className='flex flex-col w-full'>
                <div className="w-full flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => changeStatus(task.id)}
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        />
                        <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                            {task.type}
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm text-gray-500">
                            {new Date(task.datetime).toLocaleString()}
                        </p>
                        {isEditing ? (
                            <button
                                onClick={handleSaveClick}
                                className="text-[#0795d7] hover:text-blue cursor-pointer"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                disabled={task.isCompleted}
                                onClick={handleEditClick}
                                className="text-[#0795d7] hover:text-blue cursor-pointer"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
                <div className="space-y-2 flex flex-col">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="title"
                                value={editedTask.title}
                                onChange={handleChange}
                                className="text-2xl font-semibold text-gray-800 bg-white p-2 border-1 border-gray-200 rounded-md"
                            />
                            <textarea
                                name="description"
                                value={editedTask.description}
                                onChange={handleChange}
                                className="text-lg text-gray-600 bg-white p-2 border-1 border-gray-200 rounded-md"
                            />
                        </>
                    ) : (
                        <>
                            <h1 className={`text-2xl font-semibold ${task.isCompleted ? 'text-gray-500' : 'text-gray-800'}`}>{task.title}</h1>
                            {task.description && (
                                <p className={`text-lg ${task.isCompleted ? 'text-gray-500' : 'text-gray-600'}`}>{task.description}</p>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className='w-20 flex flex-col justify-center bg-gray-100 hover:bg-gray-200 rounded-md'>
                <button
                    disabled={isEditing}
                    onClick={() => onDelete(task.id)}
                    className="p-4 text-red-400 hover:text-red-500 cursor-pointer w-full h-full"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Task;