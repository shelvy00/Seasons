import React from "react";

export const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className= "ui big text loader">
              {props.message}
            </div>
        </div>
    )
}

// This is the best way if you wanna keep the messgae the same everywhere without coding it every single time.
/* Spinner.defaultProps = {
    message: "Loading..."
}; */

export default Spinner;