import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .navbar, .link, .loginButton, .heroContainer, .socialProofContainer, .fundraisingContainer, .ctaContainer, .contactContainer {
     background-color: ${(props) => (props.isDarkMode ? '#111928' : '#eee')};
     color: ${(props) => (props.isDarkMode ? '#fff' : '#111928')};  
  }
  .link:active {
    color: ${(props) => (props.isDarkMode ? '#111928' : '#fff')};  

  }

  .card, .footerContainer, .blogContainer, .blogCardContainer, .customerLogos, .rickAndMortyWrapper {
  background-color: ${(props) => (props.isDarkMode ? '#1f2a37' : '#ccc')};  
  color: ${(props) => (props.isDarkMode ? '#fff' : '#111928')};  

}

  .fundraisingContainer p, .footerContainer a, .footerContainer p, .customerLogos p, .customerLogos button, .rickAndMortyWrapper {
  color: ${(props) => (props.isDarkMode ? '#9ca3af' : '#343638')}
  }
    
  `;
