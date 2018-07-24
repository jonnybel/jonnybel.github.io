import React from 'react';
import { css } from 'react-emotion';

import { captionOpening, openingDuration } from '../styles/animations';

const Caption = () => (
    <div
        className={ css`
            position: absolute;
            text-align: center;

            will-change: transform;
            animation: ${captionOpening} ${openingDuration}ms forwards;
        ` }>
        <h1>Abel Almeida</h1>
        <p>Software Engineer, Web Dev.</p>
        <p>Cinema, Photography & Music Enthusiast. </p>
    </div>
);

export default Caption;
