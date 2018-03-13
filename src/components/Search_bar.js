import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

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
    ${media.md`margin-left:10px;padding:7px;`}

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
    ${media.md`width:300px;padding:7px;`}
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
    }
    
    render()
    {
        return (
            <form onSubmit={ this.onFormSubmit.bind(this) } key="searchForm">
                <SearchInput
                    placeholder="Find country to compare..."
                    value = { this.state.searchCountry }
                    onChange = { this.onInputChange }
                />      
                <SubmitInput 
                    type="submit"
                    value="Search!"
                />                
            </form>      
        )
    }
}