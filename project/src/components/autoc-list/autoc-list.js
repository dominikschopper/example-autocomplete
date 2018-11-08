import React from 'react';

import AutocListItem from "./autoc-list-item/autoc-list-item";

/**
 * the autocomplete list component
 * 
 * @param {object} props 
 */
const AutocList = (props) => {
    const listItems = props.list.map((listItem, idx) => {
        return(
            <AutocListItem 
                key={'key-' + idx}
                index={idx}
                name={listItem} 
                setFocusClass={idx === props.focusedId}
                selectHandler={props.selectHandler}
            />);
    });
    
    return(
        <ul className="autoc-list">
            {listItems}
        </ul>
    );
};

export default AutocList;