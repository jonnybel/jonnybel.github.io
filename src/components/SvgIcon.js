import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../media/icons.svg';

const SvgIcon = ({ name, color }) => (
    <svg fill={ color } role="presentation">
        <use xlinkHref={ `${Icons}#icon-${name}` } />
    </svg>
);

SvgIcon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default SvgIcon;
