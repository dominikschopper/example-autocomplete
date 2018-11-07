import './autoc.css';

import React, { Component } from 'react';

import AutocInput from '../../components/autoc-input/autoc-input';
import AutocList from "../../components/autoc-list/autoc-list";

import AutocSource from "../autoc-source";


/**
 * the main autocomplete class, that contains the components and uses 
 * a helper class AutocSource
 */
class Autoc extends Component {

    /**
     * @property {Object} the state of the application
     */
    state = {
        inputValue: '',
        result: [],
        minLength: 3
    };

    /**
     * @property {AutocSource}
     */
    source = new AutocSource();


    constructor(props, context) {
        
        super(props, context);

        this.state.minLength = props.minLength || 3;
        this.source.setSource(props.source);
    }

    /**
     * search within the source for anything matching the given query (ignore case)
     * @param {string} query 
     */
    search(query) {
        if (!query) {
            return false;
        }

        this.setState({inputValue: query});

        if (query.length < this.state.minLength) {
            return;
        }
        
        const result = this.source.search(query);
        this.setState({result: result});
    };

    /**
     * 
     * @param {string} value the input value aftert e.g. a click
     */
    setValue(value) {
        this.setState({ inputValue: value, result: [] });
    }

    render() {
        return(
                <div className="autoc-wrapper">
                <AutocInput 
                    label={this.props.inputLabel || "Search"}
                    value={this.state.inputValue}
                    minLength={this.props.minLength}
                    onChange={(query) => {this.search(query);}}
                />
                <AutocList
                    list={this.state.result || []} 
                    selectHandler={(value) => { this.setValue(value); }}
                />
                </div>
        )
    }
}

export default Autoc;