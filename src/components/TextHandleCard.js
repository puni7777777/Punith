import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import texthandle from './pics/Texthandle.png'

export default function TextHandleCard(props) {
    return (
        <div className="card border border-warning" style={{ width: '18rem' }}>
            <a href="https://puni7777777.github.io/texthandle/" target='_blank' className="btn btn-outline-warning">
                <img className="card-img-top" src={texthandle} alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">Texthandle</h5>
                    <p className="card-text">This is a tool to manipulate text online such as to remove breaks in lines or to add breaks to form points</p>
                </div>
            </a>
        </div>
    )
}


TextHandleCard.propTypes = {
    heading: PropTypes.string,
}

TextHandleCard.defaultProps = {
    heading: "Enter text",
}
