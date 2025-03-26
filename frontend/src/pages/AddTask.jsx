import React from 'react'
import Form from '../components/Form'
const AddTask = () => {
  return (
    <div className='flex flex-col justify-baseline items-center h-full p-5'>
        <h1 className='text-3xl font-bold mb-5'>Add a new task</h1>
      <div className='w-full flex justify-center'>
        <Form />
      </div>
    </div>
  )
}

export default AddTask;
