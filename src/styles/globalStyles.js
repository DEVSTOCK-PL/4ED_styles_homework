import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  bodyBg: '#111928',
  text: '#b1bbce',
  supportTextDarker: '#CBD5E0',
  h1: '#FFFFFF',
  h2: '#FFFFFF',
  invertedH1: '#FFFFFF',
  navLinks: '#FFFFFF',
  navLinksActive: '#1a9bdb',
  navLinksHover: '#1a9bdb',
  buttonBlueBg: '#1a56db',
  buttonGreyBg: '#1f2a37',
  buttonGreyText: '#9ca3af',
  footerBg: '#1f2a37',
  footerLink: '#9ca3af',
  logosText: '#6b7280',
  contactFormBg: '#374151',
  contactFormText: '#9ca3af',
}

export const lightTheme = {
  bodyBg: '#DADDB1',
  text: '#111928',
  supportTextDarker: '#739072',
  h1: '#111928',
  h2: '#273959',
  invertedH1: '#DADDB1',
  navLinks: '#3A4D39',
  navLinksActive: '#3A4D39',
  navLinksHover: '#000000',
  buttonBlueBg: '#3A4D39',
  buttonGreyBg: '#86A789',
  buttonGreyText: '#000000',
  footerBg: '#4F6F52',
  footerLink: '#FFFFFF',
  logosText: '#000000',
  contactFormBg: '#86A789',
  contactFormText: '#000000',
}

export const GlobalStyle = createGlobalStyle`

  body {
    transition: all 0.25s ease;
    background-color: ${(props) => props.theme.bodyBg};
    color: ${(props) => props.theme.text}; 
  }
  #switch {
    margin-top: 10x;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: monospace;
  }
.supporting-text {
    color: ${(props) => props.theme.text}; 
}
h1 {
    color: ${(props) => props.theme.h1}; 
}
h2 {
    color: ${(props) => props.theme.h2}; 

}
.invertedH1{
    color: ${(props) => props.theme.invertedH1}; 
}
.navLinks {
    color:  ${(props) => props.theme.navLinks};
}
.active {
    text-decoration: underline;
}
.buttonBlueBg {
    background-color: ${(props) => props.theme.buttonBlueBg}; 
}
.buttonGreyBg {
    background-color: ${(props) => props.theme.buttonGreyBg}; 
}
.buttonGreyText {
    fill:  ${(props) => props.theme.buttonGreyText}; 
}
.toggleMenu {
    background-color: ${(props) => props.theme.buttonGreyBg}; 
    opacity: 0.9;
}
.navLinksActive {
    fill: ${(props) => props.theme.navLinksActive}; 
}
.linkWithArrow {
    color: ${(props) => props.theme.navLinksActive}; 
}
#footer, #sponsors, #blog {
    background-color: ${(props) => props.theme.footerBg}; 
}

.footerLink {
    color: ${(props) => props.theme.footerLink}; 
}
.ctaSection {
     background-color: ${(props) => props.theme.bodyBg};
}
.contactForm {
    background-color: ${(props) => props.theme.contactFormBg};
}
.contactForm > label {
    color: ${(props) => props.theme.contactFormText}

}
#emailInput, #passwordInput, #nameInput, #secondNameInput, #subjectInput, #messageInput{
    color: ${(props) => props.theme.contactFormText}

}
`
