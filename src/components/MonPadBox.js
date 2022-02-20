import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
import { useMonkeyContract } from '../hooks/useContract';
import { useActiveWeb3React } from '../hooks';
import MonBoxContent from './ui/MonBoxContent'
import { Button, Flex } from 'rebass';
import Value from './ui/Value';
const MonPadBox = ({poppup, setPoppup}) => {
    const [amount, setAmount] = useState(0)
    const [claimableAmount, setClaimableAmount] = useState(0)

    const [allowance, setAllowance] = useState(0)

    const handleInput = (event) => {
        setAmount(event.target.value)
    }

    const monkeyContract = useMonkeyContract()
    const { account, library, chainId } = useActiveWeb3React()
    const handleStake = useCallback(async () => {
        monkeyContract.deposit({value: (amount * 10 ** 18).toString(), gasLimit:'300000'})
    }, [account, library, chainId, amount])

    return (
        <MonBox>
            <h2>MINT $MONKEY</h2>
            <p>Mint $MONKEY by staking your $BUSD</p>
            <p>You can stake as many times as you want</p>
            <p>You cannot unstake your $BUSD</p>
            <br></br>
            <FeatureText>
                <span>APR</span>
                <span><b>730%</b></span>
            </FeatureText>
            <FeatureText>
                <span>My Stake</span>
                <span><b>0BUSD</b></span>
            </FeatureText>
            <FeatureText>
                <span>Total Staked</span>
                <span><b>23,5465,354BUSD</b></span>
            </FeatureText>
            <FeatureText>
                <span>Monkey minted</span>
                <span><b>0</b></span>
            </FeatureText>
            <br></br>
            <ClaimWrapper>
                <Border></Border>
                <StyledButton color={'rgb(80,43,133)'} disabled={!account || claimableAmount == 0} onClick={()=>{alert('lskdjflskdjf')}}>Claim</StyledButton>
                <Border></Border>
                <StyledButton color={'rgb(80,43,133)'} disabled={!account || claimableAmount == 0}>Compound</StyledButton>
                <Border></Border>
            </ClaimWrapper>
            <br></br>
            <ApplyInput>
                {account ? (
                <>
                    {allowance ? 
                    <>
                        <input type="text" placeholder="Amount to stake" value={amount} onInput={handleInput} />
                        <ApplyBtns>
                                <Link to="#" onClick={handleMax}>Max</Link>
                                <Link to="#" onClick={handleStake}>Stake</Link>
                            
                        </ApplyBtns>
                    </>
                    :
                    <>
                    <ApproveButton>
                        <Link to="#" onClick={handleApprove}>Approve</Link>
                    </ApproveButton>
                    </>
                    }
                </>) : (<>
                    <ApproveButton>
                        <Link to="#" onClick={()=>{setPoppup(true)}}>Connect Wallet</Link>
                    </ApproveButton>
                </>)
                }
                
            </ApplyInput>
        </MonBox>
    )
}

export default MonPadBox

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