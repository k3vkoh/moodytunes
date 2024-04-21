import React from 'react';
import css from '../styles/Playlist.module.css';

export default function Playlist({ playlist }) {
    return (
        <div className={css.playlist}>
            <h1>{playlist.title}</h1>
            <div className={css.playlist_header}>
                <h2>
                    {playlist.songs.length} songs
                </h2>
                <button className={css.export}>
                    Export to Spotify
                    <img src='/arrow-narrow-right.png' alt='right' />
                </button>
            </div>
            <div className={css.songs_grid}>
                {playlist.songs.map((song, index) => {
                    return (
                        <div key={index} className={css.song}>
                            <img src={song.image} alt={song.title} />
                            <div className={css.song_info}>
                                <h2>{song.title}</h2>
                                <h3>{song.artist}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}