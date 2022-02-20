import React, {useState} from 'react'
import { Logo } from './ui/Logo';
import { Buttons } from './ui/Buttons';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Poppup from './Poppup';
import styled from 'styled-components';

  
function LinkTab(props) {
    return (
      <Tab
        component="a"
        // onClick={(event) => {
        //   event.preventDefault();
        // }}
        {...props}
      />
    );
  }

export const Header = ({poppup, setPoppup}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
        <HeaderWrapper>
            <HeaderArea>
                <Logo />
                <Menu>
                    <Tabs variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange} aria-label="nav tabs example" textColor="inherit" indicatorColor="primary">
                        <LinkTab label="DashBoard" href="/" />
                        <LinkTab label="Monkey Game(coming)" href="/trash" disabled/>
                        <LinkTab label="Monkey Lottery(coming)" href="/spam" disabled />
                    </Tabs>
                </Menu>
                <Buttons setPoppup={setPoppup} poppup={poppup} />
            </HeaderArea>
        </HeaderWrapper>
        <Poppup setPoppup={setPoppup} poppup={poppup} />
        </>
    )
}

const HeaderWrapper = styled.div`
    width: 100%;
    background-color: black;
    border-bottom: 4px #d97d3e solid;
`

const HeaderArea = styled.div`
    width: 1300px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    height: 90px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 425px) {
       
    }

    @media screen and (min-width:426px) and (max-width: 767px) {
        
    }

    @media screen and (min-width:768px) and (max-width: 9960px) {
        
    }

    @media screen and (max-width: 1024px) {
        height: auto;
        width: 100%;
        padding: 15px 30px;

    }

`;

const Menu = styled.div`
    width: 680px;
    .MuiTabs-indicator{
        background-color: white; 
    }

    a {
        font-weight: 700!important;
    }

    @media screen and (max-width: 1024px) {
        width: 500px;
    }

    @media screen and (min-width:768px) and (max-width: 9960px) {
        
    }

    @media screen and (min-width:426px) and (max-width: 767px) {
        width: 200px;
    }

    @media screen and (max-width: 425px) {
        width: 100px;
    }
`


