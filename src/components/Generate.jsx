import React from 'react';
import css from '../styles/Generate.module.css';
import { generateExamples } from '../services/api';

export default function Generate() {

    return (
        <div className={css.generate}>
            <div className={css.examples_container}>
                {generateExamples(3).map((example, index) => {
                    return <Example key={index} text={example} />;
                })}
            </div>
            <div className={css.prompt_container}>
                <h1 className={css.brand_name}>MOODYTUNES</h1>
                <p>Generate a playlist from any text prompt or image input</p>
                <div id="prompt" className={css.prompt}>
                    <button><img src="/photo.png" alt="image"></img></button>
                    <textarea placeholder="Generate a playlist..." />
                    <button className={css.enter}><img src="/arrow-narrow-up.png" alt="image"></img></button>
                </div>
            </div>
        </div>
    );
}

function Example({ text }) {
    return (
        <button className={css.example}>
            {text}
            <img src='/plus.png' alt='Add' />
        </button>
    )
}