import React from 'react';

const AutocListItem = (props) => {
    const classNames = ['autoc-entry'];
    if (props.setFocusClass) {
        classNames.push('is-focused');
    }
    return(
        <li
            onClick={(ev) => { props.selectHandler(ev.target.innerHTML); }}
            className={classNames.join(' ')}
        >
            {props.name}
        </li>
    );
};

export default AutocListItem;