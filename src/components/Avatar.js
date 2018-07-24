import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'react-emotion';
import avatarImage from '../media/images/portrait.png';

import { avatarEntrance, avatarOpening, openingDuration } from '../styles/animations';

const Avatar = (props) => {
    const { color, opened } = props;

    const entranceAnimation = css`
        animation: ${avatarEntrance} 600ms;
    `;

    const openingAnimation = css`
        animation: ${avatarOpening} ${openingDuration}ms forwards;
    `;

    return (
        <span
            className={ cx(
                css`
                    z-index: 2;
                    will-change: transform;

                    width: 200px;
                    height: 200px;
                    padding: 0;
                    border: none;
                    border-radius: 100%;
                    pointer-events: none;

                    background-color: ${color};
                    background-image: url(${avatarImage});
                    background-size: cover;
                `,
                !opened && entranceAnimation,
                opened && openingAnimation
            ) } />
    );
};

Avatar.propTypes = {
    color: PropTypes.string,
    opened: PropTypes.bool,
};

export default Avatar;
