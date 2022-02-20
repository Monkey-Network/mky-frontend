import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterNav = () => {
    return (
        <FooterNavArea>
            <h3>Navigation</h3>
            <ul>
                <li>
                    <a href="https://monkey-network.gitbook.io/monkeynetwork/">About Us</a>
                </li>
                <li>
                    <a href="https://monkey-network.gitbook.io/monkeynetwork/">Tokenomics</a>
                </li>
                <li>
                    <a href="https://monkey-network.gitbook.io/monkeynetwork/">RoadMap</a>
                    
                </li>
                <li>
                    <Link to="#">Launch with us</Link>
                </li>
            </ul>
        </FooterNavArea>
    )
}


const FooterNavArea = styled.div`
    ul{
        li{
            a{
                display: block;
                margin-bottom: 0.3em;
                opacity: 1;
                color: rgb(189, 189, 189);
                font-size: 1em;
                line-height: 22px;
                font-weight: 500;
                letter-spacing: 0.3px;
                text-decoration: none;
                &:hover{
                    opacity: .7
                }

            }
        }
    }
    h3{
        margin-bottom: 1.2em;
        color: rgb(255, 255, 255);
        font-size: 1.1em;
        line-height: 1.3;
        font-weight: 600;
        letter-spacing: 0.3px;
        text-transform: none;
    }

    @media screen and (max-width: 767px) {
        margin-top: 50px;
        h3{
            margin-bottom: .7em;
            font-size: .9em;
        }
        ul{
            li{
                a{
                    font-size: .8em;

                }
            }
        }


    }
    @media screen and (min-width: 768px) and (max-width: 960px) {
        display: block;
        margin-top:50px;
        width: 100%;
    }

`