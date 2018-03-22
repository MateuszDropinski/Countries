import React from 'react';
import styled from 'styled-components';

const PageSection = ({ children }) =>
{
    const Section = styled.article`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding:15px;
    `;
    
    return (
        <Section>
            {children}
        </Section>
    )
};

export { PageSection };