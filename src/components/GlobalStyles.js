import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'GalanoGrotesqueAlt';
        background-color: rgb(2, 1, 12);
        color: #fff;
        overflow-x: hidden;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    img{
        max-width: 100%;
        max-height: 100%
    }
    a,a:hover{
        text-decoration: none;

    }
    ul{
        margin:0;
        padding: 0;
        list-style: none;
    }

   

`;

export default GlobalStyle;