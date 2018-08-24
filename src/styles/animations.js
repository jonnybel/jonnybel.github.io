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
        transform: scale(0.28);
    }
    to {
        transform: scale(2);
    }
`;

const loadingLoop = keyframes`
    from {
        transform: scale(0.015);
    }
    to {
        transform: scale(0.02);
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
        transform: scale3d(0.95,0.95,1);
    }
    ${stepCues[2]}% {
        transform: scale3d(1.3,1.3,1);
    }
`;

const avatarOpening = keyframes`
    from, ${stepCues[1]}% {
        transform: scale(1);
        background-color: ${colors.background};
    }
    ${stepCues[2]}%, ${stepCues[3]}% {
        transform: scale(0.5);
        background-color: ${colors.foreground};
    }
    to {
        transform: scale(0.5) translateY(-270px);
        background-color: ${colors.foreground};
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

export {
    loadingLoop,
    paintEntrance,
    paintDuration,
    paintAnimation,
    avatarEntrance,
    avatarOpening,
    captionOpening,
    openingDuration,
    linksAnimation,
};
