import React from 'react'
import styled from 'styled-components'

const Copyright = () => {
    return (
        <Copy>
            <p>© 2022 Monkey Network. All Rights Reserved.</p>
        </Copy>
    )
}

export default Copyright


const Copy = styled.div`
    p{
        color: rgb(189, 189, 189);
        font-size: 1.2em;
        font-weight: 600;
    }

    @media screen and (max-width: 960px) {
        p{
            font-size: 19px;
        }
    }

`;