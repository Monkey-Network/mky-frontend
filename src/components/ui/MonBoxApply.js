import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useMonkeyContract } from '../../hooks/useContract';
import { useActiveWeb3React } from '../../hooks';

const MonBoxApply = ({poppup, setPoppup}) => {
    const [amount, setAmount] = useState(0)

    const handleInput = (event) => {
        setAmount(event.target.value)
    }

    const monkeyContract = useMonkeyContract()
    const { account, library, chainId } = useActiveWeb3React()
    const handleStake = useCallback(async () => {
        monkeyContract.deposit({value: (amount * 10 ** 18).toString(), gasLimit:'300000'})
    }, [account, library, chainId, amount])

    return (
        <Apply>
            <ApplyText>

                <Parti>
                    <h4>Participants</h4>
                    <p>200 users</p>
                </Parti>
                <Allo>
                    <h4>Allocation</h4>
                    <p>0.5 BNB to 1 BNB</p>
                </Allo>
            </ApplyText>
            <ApplyInput>
                <input type="text" placeholder="Amount to stake" onInput={handleInput} />
                <ApplyBtns>
                    {/* <Link to="#" aria-disabled={true}>Approve</Link> */}
                    {account?
                    <Link to="#" onClick={handleStake}>Buy</Link>
                    :
                    <Link to="#" onClick={()=>{setPoppup(true)}}>Connect Wallet</Link>
                    }
                    
                </ApplyBtns>
            </ApplyInput>

        </Apply>
    )
}

export default MonBoxApply

const Apply = styled.div`

`

const Parti = styled.div`

`

const Allo = styled.div`
    margin-left: 15px;
`
const ApplyText = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin-bottom: 30px;
    h4{
        color: rgb(255, 255, 255);
        font-size: 1em;
        font-weight: 500;
        text-decoration: none;
        text-transform: none;
        margin: 0;
        line-height: 23px;
    }
    p{
        color: rgb(214, 214, 214);
        margin: 0;
        font-size: .9em;
    }
    @media screen and (max-width: 960px) {
        h4{
            font-size: 1em;
        }
    }

`
const ApplyInput = styled.div`
    display: flex;
    input{
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
        padding: 10px 0;
        margin: 0 auto;
        border-radius: 50px;
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
        width: 180px;
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
margin-top: 20px;
    
    a{
        margin: 0 5px;
        padding: 0.5em 1.4em;
        border-style: none;
        border-width: 2px;
        border-color: rgb(255, 255, 255);
        border-radius: 30px;
        background-color: transparent;
        background-image: linear-gradient(
    245deg
    , rgb(57, 40, 180), rgb(15, 79, 255));
        box-shadow: rgb(66 32 197) 0px 0px 13px 4px;
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



    @media screen and (max-width:960px) {
        a{
            font-size: 19px;
        }
        display: flex;
        justify-content: space-between;
    }
`
