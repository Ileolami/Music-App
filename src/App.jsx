import './App.css'
import SearchBar from './Features/Searchbar'
import MusicPlayer from './Features/Musicplay'
import DarkMode from './Features/Darkmode'
import Login from './Features/Login'
import { BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <div>
            <DarkMode />
            <div className='flex flex-col my- mx-10 lg:m-8 gap-7 lg:flex-row lg:gap-12 '>
              <SearchBar />
              <MusicPlayer />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
