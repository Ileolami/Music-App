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
              <div className=''>
                <header className='flex justify-between items-center px-5 py-3 top-0 right-0 left-0'>
                  <SearchBar />
                  <DarkMode/>
                </header>
                <div className='grid place-content-center'>
                  <div className='flex flex-col gap-1'>
                    <main>
                    <ArtistPlayList />
                    </main>
                  <footer className='fixed top-3/4 left-0 right-0 bottom-0 bg-slate-800'>
                  <MusicPlayer/>
                  </footer>
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
