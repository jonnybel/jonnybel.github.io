import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx, css } from 'react-emotion';
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

    const IconLink = styled('a')`
        display: inline-block;
        border-radius: 100%;

        outline: none;
        -webkit-tap-highlight-color: transparent;

        > svg {
            fill: ${colors.submarine};

            will-change: transform;
            transition-property: transform, fill;
            transition-duration: 0.3s;
            transition-timing-function: ease;
            transform: scale(0.95);

            :hover,
            :focus {
                transform: scale(1);
                fill: ${color};
            }
        }
    `;

    return (
        <IconLink href={ href } target="_blank" className={ cx(phase === 'opening' && entranceAnimation) }>
            <SvgIcon size={ '35px' } name={ name } />
        </IconLink>
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
