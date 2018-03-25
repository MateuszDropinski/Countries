import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCountry } from '../actions';
import { media } from '../styles/media';

const TableRow = styled.tr`
    width:100%;
    td
    {
        width:16.66%;
        padding:5px;
        border 1px solid #535353;
        
        ${media.xs`padding:10px;`}
        ${media.md`padding:25px;`}
    }
`

const Flag = styled.img`
    width:50%;
    height:auto;

    ${media.xs`width:65%;`}
`

const RemoveButton = styled.button`
    border:1px solid red;
    background-color:red;
    border-radius:2px;
    padding:5px;
    color:white;
    fill:white;
    transition:.25s;
    font-size:.8rem;
    cursor:pointer;

    ${media.md`padding:10px;`}
    ${media.lg`padding:15px;`}

    svg
    {
        margin-top:3px;

        ${media.md`width:21px; height:21px;`}
        ${media.md`width:24px; height:24px;`}
    }

    span
    {
        display:none;
        
        ${media.xs`display:block;`}
    }

    &:hover
    {
        background-color:white;
        color:red;
        fill:red;
    }
`

class CountryRow extends Component
{    
    onButtonClick(e)
    {
        e.preventDefault();
        
        this.props.removeCountry(this.props.country.name);
    }
    
    render()
    {
        let {name, area, population, capital, flag} = this.props.country;
        
        return(            
            <TableRow>
                <td><Flag src={flag} alt={name}/></td>
                <td>{name}</td>
                <td>{(area) ? area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-"} km<sup>2</sup></td>
                <td>{(population) ? population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-"}</td>
                <td>{(capital) ? capital : "-"}</td>
                <td>
                    <RemoveButton
                       innerRef={x => { this.input = x }}
                       onClick = {this.onButtonClick.bind(this)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                        <span>Remove</span>
                    </RemoveButton>
                </td>
            </TableRow>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ removeCountry }, dispatch);
}

export default connect(null,mapDispatchToProps)(CountryRow);