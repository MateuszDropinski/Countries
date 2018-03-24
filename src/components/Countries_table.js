import React, { Component } from 'react';
import styled from 'styled-components';
import TableHeader from './Table_header';
import CountryRow from './Country_row';

const DataTable = ({className, children}) => (
    <table className={className} tabIndex="0">
        {children}
    </table>
)

const StyledTable = styled(DataTable)`
    width:100%;
    min-width:450px;
    font-size:.8rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-spacing:unset;
    padding-bottom:10px;
`

const TableContainer = styled.div`
    width:100%;
    overflow-x:auto;
`

const TableBody = styled.tbody`
    padding:10px 0px;
`

class CountriesTable extends Component
{
    renderRows()
    {
        let {sort, countries } = this.props;
        let {name, direction} = sort;
        
        return countries.sort((a,b)=>{
            let first = (name !== "capital" && name !== "name") ? parseInt(a[name],10) : a[name];
            let next = (name !== "capital" && name !== "name") ? parseInt(b[name],10) : b[name];
            
            console.log(first,next);
            
            if(direction === "asc") return (first < next) ? -1 : 1; 
            else return (first < next) ? 1 : -1;     
            
        }).map(country => this.renderCountryRow(country));
    }
    
    renderCountryRow(country)
    {
        return <CountryRow key={country.name} country={country}></CountryRow>
    }
    
    render()
    {
        return(         
            <TableContainer>
                <StyledTable>
                    <TableHeader/>
                    <TableBody>
                        {this.renderRows()}
                    </TableBody>
                </StyledTable>
            </TableContainer>            
        )
    }
}

export default CountriesTable;