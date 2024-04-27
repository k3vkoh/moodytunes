import React, { useEffect, useState } from 'react';
import css from '../styles/Generate.module.css';
import { generateExamples, addPlaylist } from '../services/api';

export default function Generate({ playlists, setSelectedPlaylist }) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [examples, setExamples] = useState([]);

    useEffect(() => {
        setExamples(generateExamples(3));
    }, []);

    async function handleEnter() {
        if (!prompt) {
            return;
        }
        setIsGenerating(true);
        document.getElementById('gen-button').disabled = true;
        await addPlaylist(prompt);
        setIsGenerating(false);
        document.getElementById('gen-button').disabled = false;
        setSelectedPlaylist(playlists[0]);
    }

    return (
        <div className={css.generate}>
            <div className={css.examples_container}>
                {examples.map((example, index) => {
                    return <Example key={index} text={example} setPrompt={setPrompt} />;
                })}
            </div>
            <div className={css.prompt_container}>
                <h1 className={css.brand_name}>MOODYTUNES</h1>
                <p>Generate a playlist from any text prompt or image input</p>
                <div id="prompt" className={css.prompt}>
                    <button><img src="/photo.png" alt="image"></img></button>
                    <textarea id="text" placeholder="Generate a playlist..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                    <button id="gen-button" className={css.enter} onClick={handleEnter}><img className={isGenerating ? css.spin : ''} src={isGenerating ? "/loader.png": "/arrow-narrow-up.png"} alt="image"></img></button>
                </div>
            </div>
        </div>
    );
}

function Example({ text, setPrompt }) {
    return (
        <button className={css.example} onClick={() => setPrompt(text)}>
            {text}
            <img src='/plus.png' alt='Add' />
        </button>
    )
}