import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import style from './Intro.scss'

const name = 'Lovelace'.split('');

const Intro = () => (
    <div className={style.root}>
        <span className={style.copy}>
            {name.map((letter, i) => (
                <Parallax
                    key={`letter-${i}`}
                    offsetXMax={100 * (i - 3)}
                    className={style.letter}
                >
                    {letter}
                </Parallax>
            ))}
        </span>
    </div>
);

export default Intro