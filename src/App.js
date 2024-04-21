import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import { fetchPlaylists } from './services/api';

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const playlistsData = await fetchPlaylists();
      setPlaylists(playlistsData);
    };

    fetchData();
  }, []);

  return (
    <div className='app'>
      <Sidebar playlists={playlists} selectedPlaylist={selectedPlaylist} setSelectedPlaylist={setSelectedPlaylist}/>
      <Main selectedPlaylist={selectedPlaylist} setSelectedPlaylist={setSelectedPlaylist} />
    </div>
  );
}

export default App;
