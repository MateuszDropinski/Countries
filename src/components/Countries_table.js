import React, { Component } from 'react';
import styled from 'styled-components';
import TableHeader from './Table_header';

const DataTable = styled.table`
    width:100%;
    font-size:.8rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-spacing:unset;
`

class CountriesTable extends Component
{
    render()
    {
        return(            
            <DataTable>
                <TableHeader/>
                <tbody>
                    
                </tbody>
            </DataTable>
        )
    }
}

export default CountriesTable;