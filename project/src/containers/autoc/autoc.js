import React, { Component } from 'react';
import AutocInput from '../../components/autoc-input/autoc-input';
import AutocList from "../../components/autoc-list/autoc-list";
import countriesArray from "../../example-data/countries-array";

class Autoc extends Component {
    state = {
        source: countriesArray,
        query: '',
        maxLength: 3
    };

    search(query) {
        if (!query) {
            return false;
        }
        const searchRegEx = new RegExp(query.toLowerCase(), 'i');
        const result = this.state.source.filter((item) => {
            return item.match(searchRegEx)
        });
        return result;
    };

    updateQuery(query) {
        this.setState((oldState) => {
            const newState = {...oldState};
            newState.query = query;
            return newState;
        });
    }

    getResultList() {
        const rawResult = this.search(this.state.query);
        console.log('calling resultList', rawResult);
        if (rawResult.length >= 1) {
            return <AutocList list={rawResult} />;
        }
        return '';
    }

    render() {
        return(
            <fieldset>
                <legend>{this.props.name}</legend>
                <hr/>
                <AutocInput 
                    label={this.props.inputLabel || "Search"}
                    maxLength={this.state.maxLength}
                    setQuery={(ev) => {
                        const query = ev.target.value;
                        console.log('searching on keyup', query, this.state.maxLength)
                        if (query.length >= this.state.maxLength) {
                            this.updateQuery(query);
                        }
                    }}
                />
                {this.getResultList()}
            </fieldset>
        )
    }
}

export default Autoc;