
import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'
import { FooterNav } from './FooterNav';

export const FooterTop = () => {
    return (
        <>
            <FooterTopArea>
                <Logo />
                <FooterContent>
                    <h3>Disclaimer</h3>
                    <p>The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. Monkey Network accepts no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published. © 2022 by Monkey Network team!</p>
                </FooterContent>
                <FooterNav />


            </FooterTopArea>
        </>
    )
}


const FooterTopArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 0;

    @media screen and (max-width: 767px) {
        display: block;
        padding: 40px 30px;
        border-top: 1px solid  rgb(92, 92, 92);;
        border-bottom: 1px solid  rgb(92, 92, 92);;
        a{
            width: 110px;

        }
    }
    @media screen and (min-width: 768px) and (max-width: 960px) {
        display: grid;
        padding: 50px 30px;
    }

    
`;


const FooterContent = styled.div`
    padding: 0 100px;
    padding-left: 200px;
    h3{
        margin-bottom: 1.2em;
        color: rgb(255, 255, 255);
        font-size: 1.1em;
        line-height: 1.3;
        font-weight: 600;
        letter-spacing: 0.3px;
        text-transform: none;
    }
    p{
        color: rgb(189, 189, 189);
        font-size: .9em;

    }
    @media screen and (max-width: 767px) {
        p{
            font-size: .7em;

        }
        h3{
            margin-bottom: .7em;
            font-size:.9em;
        }
    }


    @media screen and (max-width: 1024px) {
        padding: 100xp 0;
        padding-left: 0;
        margin-top: 40px;
        padding-right: 0;
    }
    
`;