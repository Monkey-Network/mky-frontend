import React, { useState } from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Divider from '../components/ui/Divider';
import { Hero } from '../components/Hero';
import { Main } from '../components/Main'
import styled from 'styled-components';
import BigNumber from 'bignumber.js';
export const Home = () => {
    const [poppup, setPoppup] = useState(false);

    const [cnt, setCnt] = useState(0)
    setTimeout(() => {
        setCnt(cnt + 1)
    }, 20000);

    return (
        <>
            <Wrapper>
                <Header setPoppup={setPoppup} poppup={poppup}/>
                <Hero setPoppup={setPoppup} poppup={poppup} />
                {/* <Main></Main> */}
            </Wrapper>
            <Divider />
            <Footer />
        </>
    )
}


const Wrapper = styled.div`

    z-index: 0;
    margin-top: 0em;
    margin-bottom: -3px;
    padding-top: 0em;
    border-style: none;
    border-width: 1px;
    border-color: black;
    background: url("assets/image/background.png") no-repeat center rgba(0,0,0,0.30);
    // background: rgb(118,186,49);
	background-blend-mode: color;
    background-size: cover;
`

