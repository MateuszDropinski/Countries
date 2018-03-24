import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortCountries } from '../actions';

const DataHeader = styled.thead`    
    background-color:#535353;
    color:#ffffff;
    td
    {
        padding:5px 15px 5px 10px;
        cursor:pointer;
        position:relative;

        &:hover
        {
            div
            {
                border-color:#adadff;
            }
        }

        &:first-letter
        {
            text-transform:uppercase;    
        }

        div
        {
            transition:.25s;
            width:0px;
            height:0px;
            background-color:white;
            position:absolute;
            top:40%;
            right:6px;
            border:3px solid white;
            border-radius:50%;
        }
    }
`;

class TableHeader extends Component
{    
    renderHeaderCell(name)
    {
        return(
            <td key={name} onClick={() => this.props.sortCountries(name)}>
                {name}<div></div>
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