import React, { Component } from 'react';
import styled from 'styled-components';

const DataHeader = styled.thead`    
    background-color:#535353;
    color:#ffffff;
    td
    {
        padding:5px;
    }
`;

class TableHeader extends Component
{    
    render()
    {
        return(          
            <DataHeader>
                <tr>
                    <td>Flag</td>
                    <td>Name</td>
                    <td>Area</td>
                    <td>Population</td>
                    <td>Capital</td>
                </tr>
            </DataHeader>
        )
    }
}

export default TableHeader;