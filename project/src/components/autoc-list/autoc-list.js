import React from 'react';
import './autoc-list.css';

import AutocListItem from "./autoc-list-item/autoc-list-item";

const AutocList = (props) => {
    return(
        <ul className="autoc-list">
            {props.list.map((listItem, idx) => <AutocListItem key={'key-' + idx} name={listItem}></AutocListItem>)}
        </ul>
    )
};

export default AutocList;