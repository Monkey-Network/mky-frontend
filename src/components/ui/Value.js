import React from 'react'
import styled from 'styled-components'

const Value = ({title, content}) => {
    return (
        <ValueArea>
            <h5>{`${title}`}</h5>
            <h3>{`${content}`}</h3>
        </ValueArea>
    )
}

export default Value


const ValueArea = styled.div`
    width: 100%;
    h3 {
        color: rgb(217,125,62)!important;
        text-align: center;
        font-size: 1.6em;
        font-weight: 600;
    }
    h5 {
        color: rgb(255,255,255);
        text-align: center;
        font-size: 1.2em;
        font-weight: 400;
    }

`