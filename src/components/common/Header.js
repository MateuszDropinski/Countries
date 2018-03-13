import React from 'react';
import styled from 'styled-components';

const Header = ({ children, size }) =>
{
    const Title = styled.h2`
        text-align:center;
        font-size:${props => props.size === "small" ? "1.7rem" : "2.3rem"};
        margin:0px;
        
        &:first-letter
        {
            text-transform: uppercase;
        }
    `;
    
    return (
        <Title size={size || "large"}>
            {children}
        </Title>
    )
};

export { Header };