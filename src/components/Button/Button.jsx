import React from "react";

import "./Button.css";

const Button = ({ onClick, text }) => {

    return (
        <button onClick={onClick} className="buttonWrapper">
            {/* 
                `data-testid="buttonText"` assigns a test ID to the <p> element. 
                This is useful for querying the element in tests. 
            */}
            <p data-testid="buttonText" className="buttonText">{text}</p>
        </button>
    );
}

export default Button;
