import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Telegram from '../../assets/img/telegram.png'
import Twitter from '../../assets/img/twitter.png'
import Mediam from '../../assets/img/mediam.png'

export const Socials = () => {
    return (
        <SocialsArea>
            <ul>
                <li><a href="https://t.me/monkeynetwork"><img src={Telegram} alt="" /></a></li>
                <li><a href="https://twitter.com/MonkeyNetwork6"><img src={Twitter} alt="" /></a></li>
                {/* <li><Link to="https://monkey-network.gitbook.io/monkeynetwork/"><img src={Mediam} alt="" /></Link></li> */}
            </ul>
        </SocialsArea>
    )
}


const SocialsArea = styled.div`
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
        li{
            display: inline-block;
            
            a{
                display: inline-block;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 5px ;
                text-align: center;
                img{
                    width: 25px;
                }
                &:hover{
                    opacity: .7;
                }
                

            }

        }
    }

    @media screen and (max-width: 960px) {
        ul{
            li{
                a{
                    width: 17px;
                    height: 17px;
                    margin: 0 5px;
                }
            }
        }
    }

`
