import React from 'react';

const AutocListItem = (props) => {
    return(
        <li className="autoc-entry">{props.name}</li>
    );
};

export default AutocListItem;