import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Textmoji = (props) => (
    <Text>
        {props.children}<Emoji>{props.emoji}</Emoji>
    </Text>
);

Textmoji.propTypes = {
    children: PropTypes.string,
    emoji: PropTypes.string,
};

const Text = styled('span')`
    position: relative;
    cursor: default;

    &:hover > span {
        opacity: 1;
        transform: translate(-50%,-70%);
    }
`;

const Emoji = styled('span')`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: 200ms ease-out;
    transition-property: transform, opacity;
`;

export default Textmoji;
