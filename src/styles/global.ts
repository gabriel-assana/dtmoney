import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }
    
    * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    }
    html{ 
        @media (max-width: 1080px){
            font-size: 93.75%; // igual a 15px -- conta para saber quanto 93.75% sera em px, 16x0,9375, pois por default todas as fonte começam com 16px
        }
        
        @media (max-width: 720px){
            font-size: 87.5%; // igual a 14px 
        }
    }
    body { 
     background: var(--background);
     -webkit-font-smoothing: antialiased;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`