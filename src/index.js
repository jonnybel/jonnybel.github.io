import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'react-emotion';

import App from './App';
import colors from './styles/colors';

injectGlobal`
    html {
        min-width: 320px;
        height: 0;
        min-height: 100%;
    }

    body,
    html {
        background-color: ${colors.foreground};
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        *::selection {
            background: ${colors.background};
        }

        & > div {
            flex: 1 1 auto;
        }

        color: ${colors.foreground};
        font-family: 'Rubik', sans-serif;
        font-size: 22px;
        font-weight: 300;

        @media (max-width: 480px) {
            font-size: 18px;
        }
    }
    h1 {
        color: ${colors.foreground};
        margin: 1em;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 1px;

        @media (max-width: 480px) {
            font-size: 27px;
        }
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
