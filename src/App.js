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
    showErrorOrLoading()
    {
        if(this.props.isLoading)
            return <p>Loading...</p>
        else
            return <ErrorMessage>{this.props.error}</ErrorMessage>
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
                    {this.showErrorOrLoading()}
                </PageSection>

                <PageSection>
                    <CountriesTable countries={this.props.countries} />
                </PageSection>

            </PageContainer>
        );
    }
}

function mapStateToProps({data})
{
    return data;
}

export default connect(mapStateToProps)(App);
