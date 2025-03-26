import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div className='w-full bg-white h-screen p-4'>
            <Link to="/" className='bg-white p-5 h-fit w-full flex justify-center items-center gap-2'>
                <img src="./Logo.jpg" alt="Logo" className='w-15' />
                <h1 className='text-5xl font-bold'><span className='text-black'>task</span><span className='text-[#0795d7]'>root</span></h1>
            </Link>
            <div className='h-fit p-4 text-2xl'>
                <nav className='flex flex-col items-center gap-5'>
                    <Link className='px-8 p-4 w-full bg-gray-100 rounded-md hover:bg-gray-200' to='/'>Home</Link>
                    <Link className='px-8 p-4 w-full bg-gray-100 rounded-md hover:bg-gray-200' to='/tasks'>Tasks</Link>
                    <Link className='px-8 p-4 w-full bg-gray-100 rounded-md hover:bg-gray-200' to='/tasks/add'>New Task</Link>
                </nav>
            </div>
        </div>
    )
}

export default Nav;