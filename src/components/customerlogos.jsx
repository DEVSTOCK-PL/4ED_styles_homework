import React from 'react'
import styled from 'styled-components'

import Button from '../Reusable/Button'
import { arrowblue, external } from '../assets/icon'
import { stripe, spotify, tesla, twitch, intel, shell, netflix, nestle, fedex, disney, bmw, cola } from '../assets/brandlogo'

const LogosWrapper = styled.div`
  width: 100%;
  height: 877px;
  display: flex;
  justify-content: center;
  background-color: #1F2A37;
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;
  font-family: 'Inter', sans-serif;

 @media (max-width: 640px) {
    width: 375px;
    height: 1212px;
}
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 96px 0px;

  @media (max-width: 640px) {
    width: 375px;
    height: 1212px;
    padding: 32px 16px;
    gap: 32px;
}
`
const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 640px) {
    width: 343px;
    height: 204px;
}


  h1 {
    font-size: 36px;
    font-weight: 800;
    line-height: 45px;
    color: #fff;
    margin: 0 auto;

    @media (max-width: 640px) {
      font-size: 30px;
      line-height: 37.5px;
  }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    color: #9CA3AF;

    @media (max-width: 640px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #3F83F8;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`
const LogosContainer = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 32px;

  @media (max-width: 640px) {
    width: 343px;
    height: 912px;
    gap: 24px;
}
`
const Row = styled.div`
width: 100%;
height: 132px;
display: flex;
justify-content: space-around;

@media (max-width: 640px) {
  width: 343px;
  height: 132px;
  flex-wrap: wrap;
  gap: 20px;
}
`
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 640px) {
    width: 142px;
    height: 132px;
}

  p {
    color: #6B7280;
    font-size: 16px;
    font-weight: 400;
    line-height: 125%;
    margin: 10px 0 20px 0;
  }

`


function CustomerLogos() {
    return(
    <LogosWrapper>
      <Container>
        <HeadingWrapper>
          <h1>Donors, Partners & Sponsors</h1>
          <p>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term
            value.</p>
          <span>Become a sponsor <img src={arrowblue}/></span>
        </HeadingWrapper>
        <LogosContainer>
          <Row>
            <Card><img src={stripe} alt="stripe" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
            <Card><img src={spotify} alt="spotify" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
            <Card><img src={tesla} alt="tesla" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
            <Card><img src={twitch} alt="twitch" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
          </Row>
          <Row>
            <Card><img src={intel} alt="intel" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
            <Card><img src={shell} alt="shell" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
            <Card><img src={netflix} alt="netflix" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
            <Card><img src={nestle} alt="nestle" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
          </Row>
          <Row>
            <Card><img src={fedex} alt="fedex" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
            <Card><img src={disney} alt="disney" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
            <Card><img src={bmw} alt="bmw" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
            <Card><img src={cola} alt="cola" />
            <p>Partner since 2015</p>
            <Button description='Visit website' color='#9CA3AF' backgroundColor='#1F2A37' width='122px' height='34px' border='1px solid #4B5563' iconLeft={external} fontSize='12px' fontWeight='500'/>
            </Card>
          </Row>
        </LogosContainer>
      </Container>
    </LogosWrapper>
    )
}


// const logosData = [
//   { src: stripe, alt: 'stripe', partnerSince: 2015 },
//   { src: spotify, alt: 'spotify', partnerSince: 2015 },
//   { src: tesla, alt: 'tesla', partnerSince: 2015 },
//   { src: twitch, alt: 'twitch', partnerSince: 2015 },
//   { src: intel, alt: 'intel', partnerSince: 2015 },
//   { src: shell, alt: 'shell', partnerSince: 2015 },
//   { src: netflix, alt: 'netflix', partnerSince: 2015 },
//   { src: nestle, alt: 'nestle', partnerSince: 2015 },
//   { src: fedex, alt: 'fedex', partnerSince: 2015 },
//   { src: disney, alt: 'disney', partnerSince: 2015 },
//   { src: bmw, alt: 'bmw', partnerSince: 2015 },
//   { src: cola, alt: 'cola', partnerSince: 2015 }
// ];

// function CustomerLogos() {
//   return (
//     <LogosWrapper>
//       <Container>
//         <HeadingWrapper>
//           <h1>Donors, Partners & Sponsors</h1>
//           <p>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value.</p>
//           <span>Become a sponsor <img src={arrowblue} alt="arrow" /></span>
//         </HeadingWrapper>
//         <LogosContainer>
//           {logosData.map((logo, index) => (
//             <Row key={index}>
//               <Card>
//                 <img src={logo.src} alt={logo.alt} />
//                 <p>Partner since {logo.partnerSince}</p>
//                 <Button
//                   description='Visit website'
//                   color='#9CA3AF'
//                   backgroundColor='#1F2A37'
//                   width='122px'
//                   height='34px'
//                   border='1px solid #4B5563'
//                   iconLeft={external}
//                   fontSize='12px'
//                   fontWeight='500'
//                 />
//               </Card>
//             </Row>
//           ))}
//         </LogosContainer>
//       </Container>
//     </LogosWrapper>
//   );
// }

export default CustomerLogos;

