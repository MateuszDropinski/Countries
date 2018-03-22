import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, PageSection } from './components/common';
import SearchBar from './components/Search_bar';
import CountriesTable from './components/Countries_table';
import { connect } from 'react-redux';

const PageContainer = styled.div`
    width:100%;
    min-height:100vh;
    background-color:#ffffff;
`

const ErrorMessage = styled.p`
    color:#9d0000;
    margin:10px 0px 0px 0px;
`

class App extends Component {
    
    constructor(props)
    {
        super(props);
        
        this.state = { error: "" }
    }
    
    componentWillReceiveProps(nextProps)
    {
        if(this.props.countries.length === nextProps.countries.length)
            this.setState({error: "Country not found."});
        else 
            this.setState({error: ""});
    }
    
    render() {      
        return (
            <PageContainer>

                <PageSection>
                    <Header>
                        Compare countries!
                    </Header>  
                </PageSection>

                <PageSection>
                    <SearchBar />   
                    <ErrorMessage>{this.state.error}</ErrorMessage>
                </PageSection>

                <PageSection>
                    <CountriesTable countries={this.props.countries} />
                </PageSection>

            </PageContainer>
        );
    }
}

function mapStateToProps(state)
{
    console.log(state);
    return {countries: state.countries};
}

export default connect(mapStateToProps)(App);
