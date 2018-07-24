import React, { Component } from 'react';
import styled, { injectGlobal } from 'react-emotion';

import Avatar from './components/Avatar';
import Caption from './components/Caption';
import Link from './components/Link';
import Paint from './components/Paint';

import { paintDuration } from './styles/animations';
import colors from './styles/colors';

const socialLinks = [
    { href: 'https://github.com/jonnybel', name: 'github', color: '#000' },
    { href: 'https://linkedin.com/in/jonnybel', name: 'linkedin', color: '#0073b1' },
    { href: 'https://letterboxd.com/jonnybel/', name: 'letterboxd', color: '#66cc33' },
    { href: 'https://instagram.com/jonnybel', name: 'instagram', color: '#8a3ab9' },
    { href: 'https://open.spotify.com/user/1166854904', name: 'spotify', color: '#1db954' },
];

const Container = styled('main')`
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LinksContainer = styled('div')`
    position: absolute;
    transform: translateY(180px);
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phase: 'entry',
        };
    }

    componentWillUnmount() {
        this.paintBackground && clearTimeout(this.paintBackground);
    }

    render() {
        const { phase } = this.state;

        return (
            <Container>
                <Avatar opened={ phase !== 'entry' } color={ colors.riverbed } />
                {phase !== 'finish' && <Paint phase={ phase } onClick={ () => this.turnOn() } autoFocus />}
                {phase !== 'entry' && <Caption phase={ phase } />}
                {phase !== 'entry' && (
                    <LinksContainer>
                        {socialLinks.map((item) => <Link phase={ phase } key={ `link-${item.name}` } link={ item } />)}
                    </LinksContainer>
                )}
            </Container>
        );
    }

    turnOn() {
        if (!this.state.opened) {
            this.setState({ phase: 'opening' });
            injectGlobal`
                body {
                    overflow: hidden;
                }
            `;

            this.paintBackground = setTimeout(() => {
                injectGlobal`
                  body,
                  html {
                      background-color: ${colors.riverbed};
                  }
                  body {
                      overflow: initial;
                  }`;

                this.setState({ phase: 'finish' });
            }, paintDuration);
        }
    }
}

export default App;
