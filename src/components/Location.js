import React from 'react';
import PropTypes from 'prop-types';
import { pctDecChars } from 'uri-js';

const Location = ({ city }) => {
    // console.log(props);
    // debugger;
    // Destructuring
    // const { city } = props;
    return (
        <div><h1>{city}</h1></div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;