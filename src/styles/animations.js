import { keyframes } from 'react-emotion';
import colors from './colors';

const openingDuration = 1700;
const stepCues = [0, 50, 65, 75];

const paintDuration = (openingDuration * stepCues[3]) / 100;

const avatarEntrance = keyframes`
    from {
        transform: scale(0.1);
    }
    to {
        transform: scale(1);
    }
`;

const paintAnimation = keyframes`
    from {
        transform: scale(0.11);
    }
    ${stepCues[2]}% {
        transform: scale(0.3);
    }
    to {
        transform: scale(2);
    }
`;
const paintEntrance = keyframes`
    from {
        transform: scale(0.01);
    }
    to {
        transform: scale(0.1);
    }
`;

const linksAnimation = keyframes`
    from, to {
        transform: scale(0.9);
    }
    ${stepCues[2]}% {
        transform: scale(1.2);
    }
`;

const avatarOpening = keyframes`
    from, ${stepCues[1]}% {
        transform: scale(1);
        background-color: ${colors.riverbed};
    }
    ${stepCues[2]}%, ${stepCues[3]}% {
        transform: scale(0.5);
        background-color: ${colors.submarine};
    }
    to {
        transform: scale(0.5) translateY(-270px);
        background-color: ${colors.submarine};
    }
`;

const captionOpening = keyframes`
    from, ${stepCues[3]}%{
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
  `;

export { avatarEntrance, paintEntrance, paintDuration, paintAnimation, avatarOpening, captionOpening, openingDuration, linksAnimation };
