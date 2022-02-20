import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core'
import { useActiveWeb3React } from '../../hooks';
import useAuth from '../../hooks/useAuth';

export const Buttons = ({setPoppup}) => {
    // const { account } = useActiveWeb3React()
    const { account } = useWeb3React()
    const { logout } = useAuth()
    return (
        <ButtonsArea>
            {account?
            <button className="connect_btn" onClick={()=> logout()}>{`${account.substr(0,5)}...${account.substr(-4,4)}`}</button>
            :
            <button className="connect_btn" onClick={()=> setPoppup(true)}>Connect Wallet</button>
            }
        </ButtonsArea>
    )
}

const ButtonsArea = styled.div`
    .connect_btn{
        padding: 0 1.4em;
        border-style: none;
        border-width: 2px;
        border-color: rgb(255, 255, 255);
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        height: 40px;
        background-color: rgb(187, 95, 32);
        font-size: 1em;
        font-weight: 500;
        letter-spacing: 0em;
        text-transform: none;
        color: #fff;
        display: inline-block;
        &:hover{
            opacity: 0.75;
        }
    }


    @media screen and (max-width: 767px) {
        .view_btn{
            display: none;
        }
    }

    @media screen and (max-width:960px) {
        .connect_btn, .view_btn{
            font-size: 13px;
            font-weight: 600;
        }
        .connect_btn{
            height: 32px;
        }
    }
    

    

`


