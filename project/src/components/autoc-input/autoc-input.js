import React from 'react';

const AutocInput = (props) => {
    return(
        <React.Fragment>
            <label>{props.label}</label>
            <input 
                type="search" 
                placeholder={props.maxLength + ' characters trigger search'} 
                onKeyUp={props.setQuery}
                />
        </React.Fragment>
    );
};

export default AutocInput;