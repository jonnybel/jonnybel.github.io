import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'react-emotion';
import avatarImage from '../media/images/portrait.png';

import Paint from './Paint';

import {
    avatarOpening,
    avatarEntrance,
    openingDuration,
} from '../styles/animations';

class Avatar extends Component {
    static propTypes = {
        phase: PropTypes.string.isRequired,
        onOpen: PropTypes.func.isRequired,
    };

    state = {
        hasLoaded: false,
    };

    render() {
        const { phase } = this.props;
        const { hasLoaded } = this.state;

        const entranceAnimation = css`
            animation: ${avatarEntrance} 600ms;
        `;

        const openingAnimation = css`
            animation: ${avatarOpening} ${openingDuration}ms forwards;
        `;

        const base = css`
            z-index: 2;
            will-change: transform;

            width: 200px;
            height: 200px;
            border-radius: 100%;
            pointer-events: none;
            user-select: none;
        `;

        const loading = css`
            transform: scale(0.1);
            opacity: 0;
            visibility: none;
        `;

        return (
            <Fragment>
                <img
                    alt="avatar"
                    src={ avatarImage }
                    role="button"
                    onLoad={ () => this.setState({ hasLoaded: true }) }
                    className={ cx(
                        base,
                        !hasLoaded && loading,
                        hasLoaded && phase === 'entry' && entranceAnimation,
                        phase !== 'entry' && openingAnimation
                    ) } />
                { phase !== 'finish' && <Paint onClick={ this.handleOnClick } hasLoaded={ hasLoaded } phase={ phase } autoFocus />}
            </Fragment>
        );
    }

    handleOnClick = () => {
        this.state.hasLoaded && this.props.onOpen();
    }
}

export default Avatar;
