import React from 'react';
import { useWeb3React } from '@web3-react/core'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MaskImg from '../assets/img/metemask.png';
import WalletImg from '../assets/img/wallet.png';
import ConnectImg from '../assets/img/connect.png';
import TimeImg from '../assets/img/time.png';
import { injected, walletconnect } from '../connectors/index.ts'
import useAuth from '../hooks/useAuth';

const Poppup = ({poppup, setPoppup}) => {
    const { login } = useAuth()

    // const connect = (connectorId) => {
    //     if (connectorId === 'walletconnect') {
    //         return activate(walletconnect)
    //     }
    //     return activate(injected)
    // }
    return (
        <PoppupArea poppupValue={poppup}>
            <PoppupWrap>

                <h1>Connect Wallet</h1>
                <PoppupList>
                    <Link to="#" onClick={()=>{login('injected');setPoppup(false)}}>Metamask <LinkSpan><img src={MaskImg} alt="" /></LinkSpan> </Link>
                </PoppupList>
                <PoppupList>
                    <Link to="#" onClick={()=>{login('injected');setPoppup(false)}}>Trust Wallet <LinkSpan><img src={WalletImg} alt="" /></LinkSpan> </Link>
                </PoppupList>
                <PoppupList>
                    <Link to="#" onClick={()=>{login('walletconnect');setPoppup(false)}}>Wallet connect <LinkSpan><img src={ConnectImg} alt="" /></LinkSpan> </Link>
                </PoppupList>

                <CloseBtn onClick={()=> setPoppup(false)}><img src={TimeImg} alt="" /></CloseBtn>

            </PoppupWrap>
        </PoppupArea>
    )
}

export default Poppup

const PoppupArea = styled.div`
    display: ${props => props.poppupValue ? 'block' : 'none'};
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    transition: all .3s;
    z-index: 99;
    background: rgba(0, 0, 0, 0.55);
`;
const PoppupWrap = styled.div`
    
    z-index: 99;
    position: absolute;
    inset: 0%;
    display: block;
    width: 600px;
    height: 560px;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: rgb(255, 255, 255);
    h1 {
        margin-top: 60px;
        color: rgb(0, 0, 0);
        font-size: 2.6em;
        font-weight: 700;
        text-align: center;
        text-transform: none;
        margin-bottom:20px;
    }

    @media screen and (max-width: 767px) {
        width: 95%;
        height: 400px;
        h1 {

            font-size: 24px;
            margin-top: 45px;
        }
    }

`

const PoppupList = styled.div`


    a{
        display: flex;
        margin-top: 30px;
        margin-right: 48px;
        margin-left: 48px;
        padding: 14px 38px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-style: none;
        border-width: 1px;
        border-color: black;
        border-radius: 25px;
        background-color: rgb(238, 238, 238);
        align-self: center;
        color: rgb(0, 0, 0);
        font-size: 1.6em;
        font-weight: 500;
        text-align: center;
        text-transform: none;
        img {
            display: flex;
            align-items: center;
            width: 60px;
        }
    }
    @media screen and (max-width: 767px) {
        a{
            margin-top: 15px;
            margin-right: 10px;
            margin-left: 10px;
            font-size: 16px;
            padding: 10px 38px;
            img {
                width: 50px;
            }
        }
    }

`

const LinkSpan = styled.span`

`


const CloseBtn = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 999;
    cursor: pointer;

`


