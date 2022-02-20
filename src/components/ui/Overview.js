import React from 'react'
import styled from 'styled-components'

const Overview = () => {
    return (
        <OverViewArea>
            <h3>Overview</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </OverViewArea>
    )
}

export default Overview


const OverViewArea = styled.div`
    margin-bottom: 20px;
    h3{
        color: rgb(235, 235, 235);
        font-size: 1.5em;
        font-style: normal;
        font-weight: 600;
        text-align: left;
        text-transform: none;
        margin-bottom: 20px;
    }
    p{
       
        color: rgb(163, 163, 163);
        font-size: 1.1em;
        line-height: 1.5;
        text-align: left;
    }

    @media screen and (max-width: 960px) {
        h3{

            font-size: 20px;
            margin-bottom: 5px;
        }
        p{
        
            font-size: 19px;
        }
    }

`