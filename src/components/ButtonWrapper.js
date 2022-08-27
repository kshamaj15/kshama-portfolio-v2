import React from "react";

import './ButtonWrapper.css';

const ButtonWrapper = ({ children }) => {
    return (
        <button className="">
            {children}
        </button>
    )
}

export default ButtonWrapper;