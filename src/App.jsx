import './App.css'
import SearchBar from './Features/Searchbar'
import MusicPlayer from './Features/Musicplay'
import DarkMode from './Features/Darkmode'
import Login from './Features/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Artist from './Features/Artist'
import { useSelector } from 'react-redux'
import ArtistPlayList from './Features/Artistplaylist'

function App() {
  const globalState = useSelector((state) => state.login.isLogin);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ globalState ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/login" element={ globalState ? <Navigate to="/dashboard" /> : <Login />} />
        <Route
          path="/dashboard"
          element={
            globalState ? (
              <div>
                <DarkMode />
                <div className='flex justify-center'> {/* Add 'justify-center' class */}
                  <Artist />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/artist"
          element={
            globalState ? (
              <div>
                <DarkMode />
                <div className='grid place-content-center'>
                  <div className='flex flex-col gap-1'>
                   <div className='flex justify-center items-center'>
                    <SearchBar />
                   </div>
                 
                    <ArtistPlayList />
                 
                  <MusicPlayer/>
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
