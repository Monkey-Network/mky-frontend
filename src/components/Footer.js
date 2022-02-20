import React from 'react'
import styled from 'styled-components'
import FooterBottom from './ui/FooterBottom'
import Divider from './ui/Divider'
import { FooterTop } from './ui/FooterTop'
export const Footer = () => {
    return (
        <FooterArea>

            <FooterTop />
            <Divider />
            <FooterBottom />

        </FooterArea>
    )
}


const FooterArea = styled.div`
    width: 1300px;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;

`;

