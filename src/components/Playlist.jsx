import React from 'react';
import css from '../styles/Playlist.module.css';

export default function Playlist({ playlist }) {
    return (
        <div>
            {playlist.title}
        </div>
    );
}