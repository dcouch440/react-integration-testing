import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	*
  {
    box-sizing: border-box;
	}

  html,
  body,
  #root
  {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
	}

  body
  {
    background-color: antiquewhite;
  }

  .floating {
    box-shadow: 0 7px 15px #00000040;
  }

`;


export default GlobalStyles;
