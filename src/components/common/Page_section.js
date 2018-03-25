import React from 'react';
import styled from 'styled-components';

import { media } from '../../styles/media';

const PageSection = ({ children }) =>
{
    const Section = styled.article`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding:15px;

        ${media.xs`padding:20px 30px;`}
        ${media.md`padding:30px 50px;`}
    `;
    
    return (
        <Section>
            {children}
        </Section>
    )
};

export { PageSection };