import React from 'react';

import AutocListItem from "./autoc-list-item/autoc-list-item";

const AutocList = (props) => {
    const listItems = props.list.map((listItem, idx) => {
        return(
            <AutocListItem 
                key={'key-' + idx}
                data-id={idx}
                name={listItem} 
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