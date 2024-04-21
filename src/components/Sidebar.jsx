import React from 'react';
import css from '../styles/Sidebar.module.css';
import { fetchPlaylists } from '../services/api';

export default function Sidebar({ playlists, selectedPlaylist, setSelectedPlaylist }) {
    return (
        <div className={css.sidebar}>
            <h1 className={css.brand}>MOODYTUNES</h1>
            <h2 className={css.rg}>Recently Generated</h2>
            <ul className={css.playlists}>
                {playlists.map((playlist, index) => {
                    return (
                        <li className={selectedPlaylist == playlist ? css.selected : ''} key={index} onClick={() => setSelectedPlaylist(playlists[index])}>
                            <img src={playlist.image ? playlist.image : '/gradient.png'} alt={playlist.title} />
                            <div className={css.playlist_info}>
                                <h2>{playlist.title}</h2>
                                <h3>{`${playlist.songs.length} songs`}</h3>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className={css.profile}>
                <img src='/profile.png' alt='Profile' />
                <p>Kevin Koh</p>
            </div>
        </div>
    );
}