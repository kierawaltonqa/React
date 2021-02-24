'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const Individual = (props) => {

    return (
        <>
            <p key={props.id}>Hello {props.name}, i see you're from {props.city}</p>
            <a href={props.website}>Link to their website</a>
        </>
    )
}


export default Individual;