import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortCountries } from '../actions';
import { media } from '../styles/media';

const DataHeader = styled.thead`    
    background-color:#535353;
    color:#ffffff;
    td
    {
        padding:5px 15px;        
        position:relative;     

        ${media.xs`padding:10px 15px;`}
        ${media.lg`padding:15px 20px;`}

        &:first-letter
        {
            text-transform:uppercase;    
        }
    }
    td:not(:first-child)
    {
        cursor:pointer;
        transition:.25s;

        &:hover
        {
            color:#adadff;
        }
    }   
`;

class TableHeader extends Component
{    
    renderHeaderCell(name)
    {
        return(
            <td key={name} onClick={() => this.props.sortCountries(name)}>
                {name}
            </td>
        )    
    }
    
    render()
    {
        return(          
            <DataHeader>
                <tr>
                    <td>Flag</td>
                    {["name","area","population","capital"].map(name => this.renderHeaderCell(name))}
                    <td></td>
                </tr>
            </DataHeader>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ sortCountries }, dispatch);
}

export default connect(null, mapDispatchToProps)(TableHeader);