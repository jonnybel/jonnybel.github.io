import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'react-emotion';
import { paintDuration, linksAnimation } from '../styles/animations';

import colors from '../styles/colors';

import SvgIcon from './SvgIcon';

const Link = (props) => {
    const {
        link: { name, href, color },
        phase,
    } = props;

    const entranceAnimation = css`
        > svg {
            animation: ${linksAnimation} ${paintDuration}ms forwards;
        }
    `;

    const iconClass = cx(
        css`
            display: inline-block;
            border-radius: 100%;
            margin: 20px;

            @media (max-width: 400px) {
                margin: 10px;
            }

            > svg {
                fill: ${colors.submarine};

                will-change: transform;
                transition-property: transform, fill;
                transition-duration: 0.3s;
                transition-timing-function: ease;
                transform: scale(0.9);

                :hover,
                :focus {
                    transform: scale(1);
                    fill: ${color};
                }
            }
        `,
        phase === 'opening' && entranceAnimation
    );

    return (
        <a href={ href } target="_blank" className={ iconClass }>
            <SvgIcon size={ '40px' } name={ name } />
        </a>
    );
};

Link.propTypes = {
    svg: PropTypes.object,
    name: PropTypes.string,
    link: PropTypes.object,
    phase: PropTypes.string,
    opened: PropTypes.bool,
};

export default Link;
