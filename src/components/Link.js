import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx, css } from 'react-emotion';
import { paintDuration, linksAnimation } from '../styles/animations';

import colors from '../styles/colors';

import SvgIcon from './SvgIcon';

const ICON_SIZE = '45px';
const SVG_SIZE = '33px';

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
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        height: ${ICON_SIZE};
        width: ${ICON_SIZE};

        outline: none;
        -webkit-tap-highlight-color: transparent;

        :hover,
        :focus {
            > svg {
                fill: ${color};
            }
        }

        :focus {
            transition: box-shadow ease 0.3s;
            box-shadow: 0 0 1px 1px ${colors.foreground};
        }

        > svg {
            fill: ${colors.foreground};
            height: ${SVG_SIZE};
            width: ${SVG_SIZE};

            transition: fill ease 0.3s;
        }
    `;

    return (
        <IconLink href={ href } target="_blank" className={ cx(phase === 'opening' && entranceAnimation) }>
            <SvgIcon name={ name } />
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
