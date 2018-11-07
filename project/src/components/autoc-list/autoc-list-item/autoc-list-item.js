import React from 'react';

const AutocListItem = (props) => {
    return(
        <li
            onClick={(ev) => { props.selectHandler(ev.target.innerHTML); }}
            className="autoc-entry"
        >
            {props.name}
        </li>
    );
};

export default AutocListItem;