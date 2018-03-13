import React from 'react';
import styled from 'styled-components';

import { media } from '../data/media_style';

const PageSection = ({ children }) =>
{
    const Section = styled.article`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding:15px;
        
        ${media.md`padding:20px;`}
        ${media.hd`padding:30px;`}
    `;
    
    return (
        <Section>
            {children}
        </Section>
    )
};

export { PageSection };