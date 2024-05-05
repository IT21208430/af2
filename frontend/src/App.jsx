import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AstronomyPictureOfTheDay from './Pages/AstronomyPictureOfTheDay';
import MarsRoverPhotos from './Pages/MarsRoverPhotos';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
        <Routes>
          <Route path='/home' element={<Home/>}  />
          <Route path='/marsroverphotos' element={<MarsRoverPhotos/>}  />
          <Route path='/APOD' element={<AstronomyPictureOfTheDay/>}  />
          <Route path='/' element={<LoginPage/>}  />
          <Route path='/register' element={<SignUpPage/>}  />
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
