import './autoc.css';

import React, { Component } from 'react';

import AutocInput from '../../components/autoc-input/autoc-input';
import AutocList from "../../components/autoc-list/autoc-list";

import AutocSource from "../autoc-source";

import globalKeyUpHandler from '../../hoc/global-keyup-handler';


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
        minLength: 3,
        isFocussed: false,
        listFocusId: -1
    };

    /**
     * @property {AutocSource}
     */
    source = new AutocSource();


    constructor(props, context) {
        
        super(props, context);

        this.state.minLength = props.minLength || 3;
        this.source.setSource(props.source);
        globalKeyUpHandler(this, {keyCode: 'ArrowUp', call: 'arrowUpHandler'},
            {keyCode: 'ArrowDown', call: 'arrowDownHandler'},
            {keyCode: 'Enter', call: 'enterHandler'});
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
     * if there are many autocomplete components on the same page,
     * i must know, if i should react to the keydown event
     * 
     * @param {boolean} to should set isFocussed=>true|false
     */
    setInputFocus(to) {
        this.setState({isFocussed: to});
    }

    setListFocusId(id) {
        this.setState({
            listFocusId: (id % this.state.result.length)
        })
    }

    arrowUpHandler() {
        if (this.state.isFocussed) {
            this.setListFocusId(this.state.listFocusId-1);
        }
    }

    arrowDownHandler() {
        if (this.state.isFocussed) {
            this.setListFocusId(this.state.listFocusId+1);
        }
    }

    enterHandler() {
        if (this.state.isFocussed) {
            const focussedValue = this.state.result[this.state.listFocusId];
            this.setValue(focussedValue);
        }
    }

    /**
     * 
     * @param {string} value the input value aftert e.g. a click
     */
    setValue(value) {
        this.setState({ 
            inputValue: value,
            result: [],
            listFocusId: -1
        });
    }

    render() {
        return(
                <div className="autoc-wrapper">
                    <h5>{this.props.name}</h5>
                    <AutocInput 
                        label={this.props.inputLabel || "Search"}
                        value={this.state.inputValue}
                        minLength={this.props.minLength}
                        onChange={(query) => {this.search(query);}}
                        focusHandler={(to)=>{ this.setInputFocus(to); }} />
                    <AutocList
                        list={this.state.result || []} 
                        selectHandler={(value) => { this.setValue(value); }}
                        reactToKeydown={this.state.isFocussed}
                        focusedId={this.state.listFocusId}
                        setFocusId={(id) => { this.setListFocusId(id); }} />
                </div>
        )
    }
}

export default Autoc;