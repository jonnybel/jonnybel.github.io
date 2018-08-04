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
        font-family: 'Abel', sans-serif;
        font-size: 22px;
    }
    h1 {
        color: ${colors.foreground};
        margin: 1em;
        font-size: 35px;
        font-weight: bold;
        letter-spacing: 2px;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
