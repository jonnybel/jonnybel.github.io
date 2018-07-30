import styled from 'react-emotion';
import colors from '../styles/colors';
import {
    loadingLoop,
    paintDuration,
    paintEntrance,
    paintAnimation,
} from '../styles/animations';

const getAnimation = (hasLoaded, phase) => {
    if (!hasLoaded) {
        return `${loadingLoop} 0.5s infinite both alternate;`;
    } else if (phase === 'entry') {
        return `${paintEntrance} 500ms;`;
    } else if (phase === 'opening') {
        return `${paintAnimation} ${paintDuration}ms forwards;`;
    }
};

const Paint = styled('button')`
    position: absolute;
    width: 2050px;
    height: 2050px;
    border: none;
    border-radius: 100%;
    outline: none;
    cursor: pointer;

    background-color: ${colors.riverbed};

    will-change: transform;
    transition-property: transform;
    transition-duration: 0.25s;
    transition-timing-function: ease;

    transform: scale(0.1);

    :hover {
        transform: scale(0.101);
    }
    :active {
        transform: scale(0.11);
    }

    animation: ${(props) => getAnimation(props.hasLoaded, props.phase)};
`;

export default Paint;
