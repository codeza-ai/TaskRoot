import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import AddTask from './pages/AddTask'
function App() {

  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-1/4 min-w-2xs border-2 border-gray-100'>
        <Nav/>
      </div>
      <div className='w-3/4 min-w-2xl'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/tasks/add' element={<AddTask />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
