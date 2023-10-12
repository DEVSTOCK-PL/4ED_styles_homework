import styled from 'styled-components'
import Logo from './LogoEach'

import BMW from './img/BMW.svg'
import CocaCola from './img/Coca-Cola.svg'
import Disney from './img/Disney.svg'
import Fedex from './img/Fedex.svg'
import Intel from './img/Intel.svg'
import Nestle from './img/Nestle.svg'
import Netflix from './img/Netflix.svg'
import Shell from './img/Shell.svg'
import Spotify from './img/Spotify.svg'
import Stripe from './img/Stripe.svg'
import Tesla from './img/Tesla.svg'
import Twitch from './img/BMW.svg'

const logos = [
  BMW,
  CocaCola,
  Disney,
  Fedex,
  Intel,
  Nestle,
  Netflix,
  Shell,
  Spotify,
  Stripe,
  Tesla,
  Twitch,
]

const CustomerLogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-content: center;
  height: fit-content;
  grid-gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (767px <= width <= 1024px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
`
const CustomerLogosGrid = () => {
  return (
    <CustomerLogosWrapper>
      {logos.map((logo, index) => (
        <Logo key={index} image={logo} />
      ))}
    </CustomerLogosWrapper>
  )
}

export default CustomerLogosGrid
