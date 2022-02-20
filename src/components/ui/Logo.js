import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import LogoImg  from '../../assets/img/logo.png'
export const Logo = () => {
    return (
        <LogoArea>
            <Link to="#"><img src={LogoImg} alt="" width="150px"/></Link>
        </LogoArea>
    )
}


const LogoArea = styled.div`
    a{
        width: 10em;
        display: inline-block;
    }
    @media screen and (max-width:425px) {
        a{
            width: 90px;
            display: flex;
            align-items: center;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 960px) {
        a{
            width: 100px;
            display: flex;
            align-items: center;
           
        }
    }

`;