import React from 'react';

const AutocInput = (props) => {
    return(
        <React.Fragment>
            <label>{props.label}</label>
            <input
                className="autoc-input"
                type="search" 
                value={props.value}
                placeholder={props.minLength + ' chars trigger the autocomplete'} 
                onChange={(ev) => { 
                    props.onChange(ev.target.value);
                    console.log('change event', ev.target);
                }}
                />
        </React.Fragment>
    );
};

export default AutocInput;
