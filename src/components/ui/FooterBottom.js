import React from 'react'
import styled from 'styled-components'
import Copyright from './Copyright'
import { Socials } from './Socials'
const FooterBottom = () => {
    return (
        <>
            
            <FooterBottomArea>
                <Copyright />
                <Socials />
            </FooterBottomArea>

        </>
    )
}

export default FooterBottom


const FooterBottomArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 0;
    
    @media screen and (max-width: 1024px) {
        padding: 0 30px
    }

    @media screen and (max-width: 960px) {
        padding: 30px;
        >div{
            width: 50%;
        }
        ul{
            text-align: right;
            li{
                a{
                    width: 25px;
                    height: 25px;
                    margin-left: 10px;
                    img{
                        width: 20px;
                    }
                }
            }
        }
    }
`;