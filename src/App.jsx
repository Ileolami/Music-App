import './App.css'
import SearchBar from './Features/Searchbar'
import MusicPlayer from './Features/Musicplay'
import DarkMode from './Features/Darkmode'
import Login from './Features/Login'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Artist from './Features/Artist'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <div>
            <DarkMode />
           <div className='flex justify-around'>
            <Artist />
           {/* <div className='flex flex-col '>
              <SearchBar />
              <MusicPlayer />
            </div> */}
           </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
