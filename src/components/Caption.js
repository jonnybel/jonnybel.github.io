import React from 'react';
import { css } from 'react-emotion';

import Textmoji from './Textmoji';

import { captionOpening, openingDuration } from '../styles/animations';

const Caption = () => (
    <div
        className={ css`
            position: absolute;
            padding: 0 25px;
            text-align: center;
            cursor: default;

            will-change: transform;
            animation: ${captionOpening} ${openingDuration}ms forwards;
        ` }>
        <h1>Abel Almeida</h1>
        <Textmoji emoji="👨‍💻" >{'Software Engineer'}</Textmoji >
        <p>
            <Textmoji emoji="🎬" >{'Cinema'}</Textmoji >
            {', '}
            <Textmoji emoji="📷" >{'Photography'}</Textmoji >
            {' & '}
            <Textmoji emoji="🎵" >{'Music'}</Textmoji >
            {' Enthusiast.'}
        </p>
    </div>
);

export default Caption;
