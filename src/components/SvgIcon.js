import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../media/icons.svg';

const SvgIcon = ({ name, color, size }) => (
    <svg fill={ color } width={ size } height={ size } role="presentation">
        <use xlinkHref={ `${Icons}#icon-${name}` } />
    </svg>
);

SvgIcon.propTypes = {
    size: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default SvgIcon;
