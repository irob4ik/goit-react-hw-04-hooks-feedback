import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    );
}

Section.defaultProps = {
    title: "Librakalibra",
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}
    
export default Section;