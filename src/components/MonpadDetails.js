import BigNumber from 'bignumber.js';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MONKEY_ADDRESS } from '../constants';
import { useMonkeyContractForRead } from '../hooks/useContract';
import MonPadTitle from './ui/MonPadTitle'
import Value from './ui/Value';
const MonpadDetails = () => {
    const [tokenPrice, setTokenPrice] = useState(0)
    const [totalSupply, setTotalSupply] = useState(0)
    const [circSupply, setCircSupply] = useState(0)
    const [avaSupply, setAvaSupply] = useState(0)
    const monkeyContractForRead = useMonkeyContractForRead()

    useEffect(async() => {
        const tokenPrice = await monkeyContractForRead.methods.getTokenPrice().call()
        setTokenPrice(new BigNumber((tokenPrice / 10 ** 18).toString()).toNumber())
        const totalSupply = await monkeyContractForRead.methods.limitSupply().call()
        setTotalSupply(new BigNumber((totalSupply / 10 ** 18).toString()).toNumber())
        const circSupply = await monkeyContractForRead.methods.totalSupply().call()
        setCircSupply(new BigNumber((circSupply / 10 ** 18).toString()).toNumber())
        const avaSupply = await monkeyContractForRead.methods.availableSupply().call()
        setAvaSupply(new BigNumber((avaSupply / 10 ** 18).toString()).toNumber())
    })
    return (
        <MonPad>
            <MonPadTitle />
            <Value title='$MONKEY PRICE' content={tokenPrice.toLocaleString('en-US', {maximumFractionDigits: 6}) + ' $'}/>
            <Values>
                <Value title='Total supply' content={totalSupply.toLocaleString()}/>
                <Value title='Circulating supply' content={circSupply.toLocaleString()}/>
                <Value title='Available supply' content={avaSupply.toLocaleString()}/>
            </Values>
            <StyledLink>
                <a href={`https://bscscan.com/address/${MONKEY_ADDRESS}#code`} target="_blank" data-close="true">Contract</a>
                <font color="#D97D3E">|</font>  
                <a href="#" target="_blank" data-close="true">Whitepaper</a>
                <font color="#D97D3E">|</font>
                <a href="#" target="_blank" data-close="true">Telegram Group</a>
                <font color="#D97D3E">|</font>
                <a href="E" target="_blank" data-close="true">Telegram Channel</a>
            </StyledLink>
        </MonPad>
    )
}

export default MonpadDetails;



const Values = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    h3{
        color: rgb(235, 235, 235);
        font-size: 1.5em;
        font-style: normal;
        font-weight: 600;
        text-transform: none;
        margin-bottom: 20px;
    }
    li{
        color: rgb(224, 224, 224);
        font-weight: 600;
        span{
            color: rgb(163, 163, 163);
            font-weight: 400;
        }
    }


    @media screen and (max-width: 1024px) {
        display: block;
        width: 100%;
 
    }

    @media screen and (max-width: 960px ){
        h3{
            font-size: 20px;
            margin-bottom: 5px;
            
        }
        ul{
            li{
                font-size: 19px;
            }
            margin-bottom: 50px;
        }
    }
`;

const MonPad = styled.div`
    text-align: center;
    display: flex;
    width: 100%;
    height: 100%;
    margin-bottom: 0em;
    padding: 0em 0em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 1.9px;
    border-color: rgba(255, 255, 255, 0.9);
    border-radius: 30px;
    background-color: rgba(33, 37, 41, 0.9);
    color: rgb(28, 28, 28);
    text-align: center;

    h2{
        margin-top: 0px;
        margin-bottom: 0;
        color: rgb(255, 255, 255);
        font-size: 2.5em;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -0.02em;
        text-transform: none;
    }


    @media screen and (max-width: 960px) {
        margin-top: 20px;
        h2{
            font-size: 1.5em;
        }
    }

    @media screen and (max-width: 1024px) {
        padding-right:0;
    }
`;

const StyledLink = styled.div`
    margin-bottom: 10px;
    a {
        color: rgb(200,200,200);
        margin: 0 5px 10px 5px;
    }
    a: hover {
        color: #D97D3E;
    }
    a: active {
        color: rgb(255,255,255);
    }
`