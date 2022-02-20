import React from 'react'
import styled from 'styled-components'

const Divider = () => {
    return (
        <DividerArea />
    )
}

export default Divider



const DividerArea = styled.div`
    height: 1px;
    background-color: rgb(92, 92, 92);
    display: block;

    @media screen and (max-width: 767px) {
        display: none;
    }
`