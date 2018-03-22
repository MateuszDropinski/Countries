import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCountry } from '../actions';

const SubmitInput = styled.input`
    font-size: 1rem;
    padding:5px;
    border:1px solid #000000;
    border-radius:2px;
    background-color:#ffffff;
    color:#000000;
    margin-left:5px;
    transition:.25s;
    cursor:pointer;

    &:hover
    {
        background-color:#000000;
        color:#ffffff;
    }
`;

const SearchInput = styled.input`
    width:200px;
    font-size: 1rem;
    padding:5px;
    border-radius:2px;
    border:1px solid #000000;
`;

class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = { searchCountry: "" };
        
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(evt)
    {
        this.setState({ searchCountry: evt.target.value});
    }
    
    onFormSubmit(e)
    {
        e.preventDefault();
        
        this.setState({ searchCountry: "" });
        this.props.addCountry(this.state.searchCountry);
    }
    
    render()
    {
        return (
            <form onSubmit={ this.onFormSubmit.bind(this) } key="searchForm">
                <SearchInput
                    placeholder="Add country to compare..."
                    value = { this.state.searchCountry }
                    onChange = { this.onInputChange }
                />      
                <SubmitInput 
                    type="submit"
                    value="Add!"
                />                
            </form>      
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ addCountry }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);