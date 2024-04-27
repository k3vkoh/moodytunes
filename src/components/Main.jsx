import React from 'react';
import css from '../styles/Main.module.css';
import Generate from './Generate';
import Playlist from './Playlist';

export default function Main({ playlists, selectedPlaylist, setSelectedPlaylist }) {
    return (
        <div className={css.main}>
            <div className={css.header}>
                <button className={css.new_playlist} onClick={() => setSelectedPlaylist(null)}>New Playlist</button>
            </div>
            {!selectedPlaylist ? <Generate playlists={playlists} setSelectedPlaylist={setSelectedPlaylist} /> : <Playlist playlist={selectedPlaylist} />}
        </div>
    );
}