import styled from 'react-emotion';
import colors from '../styles/colors';
import { paintEntrance, paintAnimation, paintDuration } from '../styles/animations';

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

    animation: ${(props) => {
        if (props.phase === 'entry') {
            return `${paintEntrance} 500ms;`;
        } else if (props.phase === 'opening') {
            return `${paintAnimation} ${paintDuration}ms forwards;`;
        }
    }};
`;

export default Paint;
