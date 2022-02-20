import React, { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { useMonkeyContract, useTokenContract } from '../hooks/useContract';
import { useActiveWeb3React } from '../hooks';
import MonBoxContent from './ui/MonBoxContent'
import { Button, Flex } from 'rebass';
import Value from './ui/Value';
import { MONKEY_ADDRESS } from '../constants';
import BigNumber from 'bignumber.js';
const AirdropBox = ({poppup, setPoppup}) => {
    const [avaAmount, setAvaAmount] = useState()
    const [bonus, setBonus] = useState()
    const [invest, setInvest] = useState()
    const [hour, setHour] = useState(0)
    const [minute, setMinute]= useState(0)
    const [date, setDate] = useState(0)
    const [available, setAvailable] = useState(false)
    const [resetTime, setResetTime] = useState()

    const { account, library, chainId } = useActiveWeb3React()
    const monkeyContract = useMonkeyContract()

    useEffect(async () => {
        if(account) {
            const avaAmount = await monkeyContract.getAvailableAirdrop()
            setAvaAmount(new BigNumber((avaAmount / 10 ** 18).toString()).toNumber())
            const bonus = await monkeyContract.getUserBonAirdrop(account)
            setBonus(new BigNumber((bonus).toString()).toNumber())
            const invest = await monkeyContract.getUserBUSDStaked(account)
            setInvest(new BigNumber((invest / 10 ** 18).toString()).toNumber())
            var resetTime = await monkeyContract.getUserTimeToNextAirdrop(account)
            resetTime = new BigNumber((resetTime).toString()).toNumber()
            setResetTime(resetTime)
            if(resetTime == 0 && bonus >= 3 && invest >= 100 && avaAmount > 0)
                setAvailable(true)
            resetTime /= 60
            setDate(Math.floor(resetTime / 1440))
            resetTime %= 1440
            setHour(Math.floor(resetTime / 60))
            setMinute(Math.floor(resetTime % 60))
        }
    })
    
    const handleClaim = useCallback(async () => {
        monkeyContract.claimAirdrop()
    }, [account, library, chainId])

    return (
        <MonBox>
            <h2>AIRDROP $MONKEY</h2>
            <p>AIRDROP 50 $MONKEY at once</p>
            <p>You can get airdrop as many times you want</p>
            <p>You can get airdrop after 7 days again</p>
            <br></br>
            <FeatureText>
                <span>Available AIRDROP</span>
                <span><b>{avaAmount != undefined ? avaAmount.toLocaleString() : '_'} {avaAmount >= 0 ? '✅' : '❌'}</b></span>
            </FeatureText>
            <FeatureText>
                <span>My Stake&nbsp;
                    <Tooltip title="If you buy $MONKEY more than 100 USD you can get airdrop">
                        <svg viewBox="0 0 24 24" color="#ffffff" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg>
                    </Tooltip>
                </span>
                <span><b>{invest != undefined ? invest.toLocaleString() : '_'} {invest >= 100 ? '✅' : '❌'}</b></span>
            </FeatureText>
            <FeatureText>
                <span>Referers&nbsp;
                    <Tooltip title="If you refer 3 person who baught $MONKEY more than 50 BUSD">
                        <svg viewBox="0 0 24 24" color="#ffffff" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg>
                    </Tooltip>
                </span>
                <span><b>{bonus != undefined ? bonus.toLocaleString() : '_'} {bonus >= 3 ? '✅' : '❌'}</b></span>
            </FeatureText>
            <br></br>
            <Value title={'Available after' + (resetTime == 0 ? '✅' : '❌')} content={`${date} d : ${hour} h : ${minute} m`}/>
            <br></br>
            <ClaimWrapper>
                <Border></Border>
                <StyledButton color={'rgb(80,43,133)'} disabled={!account || !available} width={'100%'} onClick={handleClaim}>Claim</StyledButton>
                <Border></Border>
            </ClaimWrapper>
            <br></br>
        </MonBox>
    )
}

export default AirdropBox

const Border = styled.div`
    width: 10%;
`
const ClaimWrapper = styled.div`
    display: flex;
    margin: 5px 0;
`

const StyledButton = styled(Button)`
    width: 50%;
    margin: 5px 10px;
    padding: 5px 10px;
    height:40px;
    cursor: pointer;
`

const ApplyInput = styled.div`
    display: flex;
    input{
        height: 50px;
        margin-left: 20px;
        margin-right: 5px;
        display: block;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: rgb(148,148,148);
        font-size: 1.1em;
        text-align: center;
        -webkit-letter-spacing: -0.4px;
        -moz-letter-spacing: -0.4px;
        -ms-letter-spacing: -0.4px;
        letter-spacing: -0.4px;
        border-radius: 5px;
        width: 100%;
        font-family: 'GalanoGrotesqueAlt';
        border: none;
        padding: 8px;
        &::placeholder{
            font-size: 1em;
            font-family: 'GalanoGrotesqueAlt';
        }
        &:hover, &::focus, &::focus-visible{
            outline: none;
        }
    }
    input:focus-visible {
        outline: none;
    }

    @media screen and (max-width:960px) {
        margin: 0 auto;
        input{
            font-size: 16px;
            padding:7px 5px 5px 5px;
            line-height: 24px;
            &::placeholder{
            font-size: 16px;
            }
        }
    }



`
const ApplyBtns = styled.div`
    display: flex;
    a{
        width: 80px;
        margin: 0 5px;
        padding: 0.5em 0em;
        border-style: none;
        border-width: 2px;
        border-color: rgb(255, 255, 255);
        border-radius: 5px;
        background-color: #D97D3E;
        font-size: 1.2em;
        font-weight: 500;
        letter-spacing: 0em;
        text-transform: none;
        color: #fff;
        display: inline-block;
        &:hover{
            opacity: 0.75;
        }
    }

    a:last-of-type{
        margin-right: 20px;
    }



    @media screen and (max-width:960px) {
        a{
            font-size: 19px;
        }
        display: flex;
        justify-content: space-between;
    }
`

const ApproveButton = styled.div`
    width: 80%;
    margin: 0 auto;
    a {
        width: 100%;
        margin: 0 5px;
        padding: 0.5em 0em;
        border-style: none;
        border-width: 2px;
        border-color: rgb(255, 255, 255);
        border-radius: 5px;
        background-color: #D97D3E;
        font-size: 1.2em;
        font-weight: 500;
        letter-spacing: 0em;
        text-transform: none;
        color: #fff;
        display: inline-block;
        &:hover{
            opacity: 0.75;
        }
    }
`

const MonBox = styled.div`
    text-align: center;
    // display: flex;
    width: 100%;
    min-height: 500px;
    margin-bottom: 0em;
    padding: 1em 0em;
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
        margin-top: 20px;
        margin-bottom: 0;
        color: rgb(255, 255, 255);
        font-size: 1.8em;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -0.02em;
        text-transform: none;
        margin-bottom: 0.1em;
    }

    p{
        color: rgb(214, 214, 214);
        font-size: .9em;
    }


    @media screen and (max-width: 960px) {
        
        h2{
            font-size: 2.2em;
            margin-bottom: 10px;
        }
        padding: 0em 0em;
    }

`

const FeatureText = styled.div`
    padding: 5px 0;
    display: flex;
    background-color: #D97D3E;
    span {
        width:50%;
    }
`