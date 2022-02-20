
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IconImg from '../../assets/img/icon.png';
import { useMonkeyContract, useMonkeyContractForRead } from '../../hooks/useContract';


const MonBoxContent = ({pr, SetPr}) => {
    const monkeyContractForRead = useMonkeyContractForRead()
    const [percent, setPercent] = useState('0')
    const useRefresh = Date.now() / 5000;

    useEffect(()=>{
        const fetch = async () => {
            const isLive = await monkeyContractForRead.methods.isLive().call()
            const saleState = await monkeyContractForRead.methods.getDepositAmount().call()
            if(isLive)
                SetPr(true)
            setPercent((saleState/10**18/50).toString())
        }
        fetch()
    },[monkeyContractForRead, useRefresh])

    return (
        <>
        <TitleBox>
            <img src={IconImg} alt="" />
                <MonBoxContentArea>
                    <h3>MoonPad</h3>
                    <p>MOONPAD/BNB</p>
                </MonBoxContentArea>
            </TitleBox>

            <MonBoxInput>

                <InputLine prvalue={percent} />
                <ul>
                    <li>0 BNB</li>
                    <li>{percent}%</li>
                    <li>50 BNB</li>
                </ul>

            </MonBoxInput>
    </>
    )
}

export default MonBoxContent;



const TitleBox = styled.div`
    img{
        width: 70px;
        margin-right: 15px;
    }
    width: 45%;
    display: flex;
    align-items: center;
    margin: 0 auto;


    @media screen and (max-width: 960px) {
        width: 60%;
        img{
            width: 50px;
        }
    }

`
const MonBoxContentArea = styled.div`
    text-align: left;
    
    h3{
        color: rgb(255, 255, 255);
        font-size: 1.8em;
        font-weight: 600;
        letter-spacing: -0.02em;
        text-transform: none;
        line-height: 26px;
        margin:0 0;
    }
    p{
        padding-top: 0px;
        color: rgb(156, 156, 156);
        font-size: 1.2em;
        font-weight: 500;
        margin: 0 0;
    }
    @media screen and (max-width: 960px) {
        h3{
            font-size: 1.4em;
            line-height: 20px;
        }
        p{
            font-size: 1em;
        }
    }
`

const MonBoxInput = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 13px 0;
    ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        li{
            color: rgb(214, 214, 214);
            font-size: 1em;
            font-weight: 500;
            font-family: 'GalanoGrotesqueAlt';
            
        }
        li:nth-child(2){
            font-size: 1.5em;
            color: #fff;
            margin-top:3px;
        }
    }


    @media screen and (max-width: 960px) {
        width: 80%;
        ul{
            li{
                font-size: 1em;
                
            }
            li:nth-child(2){
                font-size: 1.5em;
            }
        }
    }

`

const InputLine = styled.div`
    display: flex;
    width: 100%;
    height: 7px;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 20px;
    background-color: rgba(104, 104, 104, 0.47);
    background-image: none;
    position: relative;
    z-index: 2;

    &::after{
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: ${props => props.prvalue}%;
        height: 100%;
        background: linear-gradient(269deg, rgb(60, 9, 255), rgb(115, 81, 245));
        z-index: 9;
        border-radius: 20px;

    }


    @media screen and (max-width: 960px) {
        margin-bottom: 3px;
    }

`