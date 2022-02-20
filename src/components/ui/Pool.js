import React from 'react'
import styled from 'styled-components'

const Pool = () => {
    return (
        <PoolArea>
            <h3>Pool Details</h3>
            <ul>
                <li>Hard Cap: <span>15.000 USD</span></li>
                <li>Initial MC: <span>35.000 USD</span></li>
                <li>Start: <span>28 Aug, 14 UTC</span></li>
                <li>End: <span>28 Aug, 16 UTC</span></li>
            </ul>
        </PoolArea>
    )
}

export default Pool


const PoolArea = styled.div`

`