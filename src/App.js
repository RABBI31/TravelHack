import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import Place from './places/pages/Place'
import User from './users/pages/User'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/place' element={<Place />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
