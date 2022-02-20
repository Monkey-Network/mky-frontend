import styled from 'styled-components'
import Countdown from 'react-countdown';
import { useCurrentBlockNumber } from '../../hooks';
const Completionist = () => <span>(NOW LIVE)</span>;

const MonPadTitle = () => {
    const blockNumber = useCurrentBlockNumber()


    return (
        <Title>
            <TitleContent>
                <h2>MONKEY NETWORK STATISTICS &nbsp;
                    {
                        blockNumber != 0 && blockNumber < 1645383600 ?
                        <>
                            <Countdown date={Date.now() + (1645383600 - blockNumber) * 1000}>
                                <Completionist />
                            </Countdown>
                            &nbsp;&nbsp;LEFT TO LIVE
                        </>
                        :
                        <>
                            <Completionist />
                        </>
                    }
                </h2>
                <h3>Stake $BUSD and earn daily staking rewards</h3>
                <h3>Stake $MONKEY and earn daily staking rewards</h3>
            </TitleContent>

        </Title>
    )
}

export default MonPadTitle

const Title = styled.div`
    background-color: rgb(217, 125, 62);
    border-style: solid;
    border-width: 1.9px;
    border-color: rgba(255, 255, 255, 0.9);
    border-bottom-color: rgb(217, 125, 62);
    border-radius: 30px 30px 0 0;
    margin-top: -1px;
    display: flex;
    align-items: left;
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
`;

const TitleImg = styled.div`
    margin-right: 20px;
    img{
        width: 115px;
    }
    @media screen and (max-width: 960px) {
        
        margin-right: 15px;
        img{
            width: 80px;
        }
    }
`;

const TitleContent = styled.div`
    padding-left: 30px;
    h2{
        color: rgb(5, 58, 12)!important;
        font-size: 1.6em;
        font-weight: 600;
        letter-spacing: -0.02em;
        text-transform: none;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    h3{
        font-size: 1em;
        margin-bottom: 0;
        color: rgb(5, 58, 12);
        font-weight: 600;
        letter-spacing: -0.02em;
        text-transform: none;
        margin-top: 10px;
    }
    a{
        position: relative;
        z-index: 12;
        color: rgb(124, 91, 255);
        font-size: 1.2em;
        &:hover{
            opacity: .7;
        }
        
        display: inline-block;
    }

    @media screen and (max-width: 960px) {

        h2, h3{
       
            font-size: 1em;
            line-height: 26px;
 
        }
        a{
 
           
            font-size: .9em;
            margin-bottom: 0;
        }
    }
`;

