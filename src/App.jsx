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
                <div className='flex justify-around'>
                  <Artist />
                  <div className='flex flex-col gap-1'>
                    <SearchBar />
                    <MusicPlayer />
                  </div>
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
                <div className='flex justify-around'>
                  <ArtistPlayList />
                  <div className='flex flex-col gap-1'>
                    <SearchBar />
                    <MusicPlayer />
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
