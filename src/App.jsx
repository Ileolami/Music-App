import './App.css'
import SearchBar from './Features/Searchbar'
import MusicPlayer from './Features/Musicplay'
import DarkMode from './Features/Darkmode'

function App() {
  return (
    <div>
      <DarkMode/>
      <div className='flex flex-col my- mx-10 lg:m-10 gap-7 lg:flex-row lg:gap-12 '>
        <SearchBar />
        <MusicPlayer />
      </div>
    </div>
  )
}

export default App
