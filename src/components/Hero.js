import styled from "styled-components"
import MonpadDetails from "./MonpadDetails"
import MonPadBox from "./MonPadBox"
import MintBox from "./MintBox"
import StakeBox from "./StakeBox"
import VaultBox from "./VaultBox"
import SellBox from "./SellBox"
import AirdropBox from "./AirDropBox"
import Guide from "./Guide"
import ReferalBox from "./ReferalBox"
import { useEffect, useState } from "react"
import { useMonkeyContract } from "../hooks/useContract"
import { useActiveWeb3React } from "../hooks"
import BigNumber from "bignumber.js"

export const Hero = ({poppup, setPoppup}) => {
    const [tokenBalance, setTokenBalance] = useState(0)
    const monkeyContract = useMonkeyContract()
    const { account } = useActiveWeb3React()
    useEffect(async () => {
        if(account) {
            const balance = await monkeyContract.balanceOf(account)
            setTokenBalance(new BigNumber((balance / 10 ** 18).toString()).toNumber())
        }
    })
    return (
        <HeroArea>
            <MonpadDetails tokenBalance={tokenBalance}/>
            <BoxWrapper>
                <MintBox setPoppup={setPoppup} poppup={poppup} tokenBalance={tokenBalance} />
                <Border></Border>
                <StakeBox setPoppup={setPoppup} poppup={poppup} tokenBalance={tokenBalance} />
                <Border></Border>
                <VaultBox setPoppup={setPoppup} poppup={poppup} tokenBalance={tokenBalance} />
            </BoxWrapper>
            <BoxWrapper>
                <SellBox setPoppup={setPoppup} poppup={poppup} tokenBalance={tokenBalance} />
                <Border></Border>
                <AirdropBox setPoppup={setPoppup} poppup={poppup} tokenBalance={tokenBalance} />
                <Border></Border>
                <ReferalBox setPoppup={setPoppup} poppup={poppup} tokenBalance={tokenBalance} ></ReferalBox>
            </BoxWrapper>
            <Guide />
         </HeroArea>
    )
}

const HeroArea = styled.div`
    width: 1300px;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0 50px;
    >div{
        width: 100%;
        margin-bottom: 20px;
    }

   
    @media screen and (max-width: 1024px){
        width: 100%;
        padding: 120px 30px;
    }
    @media screen and (max-width: 767px) {
        
        >div{
            width: 100%;
        }
        display: block;
        padding: 0 30px 50px;
    }

`

const BoxWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 1024px){
        display: block;
    }
`

const Border = styled.div`
    margin-left: 15px;
    margin-bottom: 15px;
`