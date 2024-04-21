import React from 'react';
import css from '../styles/Main.module.css';
import Generate from './Generate';
import Playlist from './Playlist';

export default function Main({ selectedPlaylist, setSelectedPlaylist }) {
  return (
    <div className={css.main}>
        <button className={css.new_playlist} onClick={() => setSelectedPlaylist(null)}>New Playlist</button>
        {!selectedPlaylist ? <Generate /> : <Playlist playlist={selectedPlaylist} />}
    </div>
  );
}