import { Link } from 'react-router-dom';
import styled from "styled-components";

import { LinkButton, TransparentButton } from '../generalComponents/indexGeneralComponents';
import { Stripe, Spotify, Tesla, Twitch, Intel, Shell, Netflix, Nestle, Fedex, Disney, BMW, CocaCola } from "../image/indexImage";
import { breakpoints } from "./breakpoints";


const StyledCustomerLogos = styled.div`
width: 100%;
min-width: 1440px;
height: 877px;
border: 1px; 0px 96px 0px;
gap: 64px;
display: flex;
background: #1F2A37;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
    margin: 0 32px;
    padding: 40px 0px;
    }
`
const HeadingCustomerLogos = styled.div`
width: 100%;
min-width:672px;
height: 161px;
gap: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: ${breakpoints.s}) {
    height: auto;
}
`
const ContainerCustomerLogos = styled.div`
width: 100%;
max-width: 1280px;
height: 460px;
gap: 32px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

@media screen and (max-width: ${breakpoints.s}) {
    height: auto;
    flex-wrap: wrap;

}
`
const RowCustomerLogos = styled.div`
width: 100%;
min-width: 1280px;
height: 132px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@media screen and (max-width: ${breakpoints.s}) {
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    padding: 10px 30px;
    }
`
const CardCustomerLogos = styled.div`
width: 320px;
height: 132px;
border-radius: 8px;
gap: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: ${breakpoints.s}) {
    width: 142px;
    height: auto;
    padding: 20px 80px;
    display: flex; 
}
`
const TechCard = styled(CardCustomerLogos)`
width: 100%;
min-width: 343px;
flex-direction: row;
justify-content: center;
align-items: center;

#media screen and (max-width: ${breakpoints.s}) {
    width: 343px;
    height: auto;
    display: flex;
    flex-direction: column;
}
`
const LogoCustomerLogos = styled.svg`
width: ${(props) => props.width};
height: 48px;
display: flex;
justify-content: center;
align-items: center;
`
const LogoTextContainer = styled.div`
width: 142px;
height:78px;
gap:10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const TextCustomerLogos = styled.div`
width: ${(props) => props.width||"142px"};
height: ${(props) => props.height || "20px"};
font-weight:400;
font-size: 16px;
line-height: 20px;
color: #6B7280;
display: flex;
justify-content: center;
align-items: center;
`
const TitleText = styled.div`
width: 672px;
height: 45px;
font-size: 36px;
font-weight: 800;
line-height: 45px;
display: flex;
justify-content: center;
align-items: center;
color: #FFF;
`
const PreviewText = styled(TitleText)`
height: 60px;
font-size: 20px;
font-weight: 400;
line-height: 30px;
color: #9CA3AF;
`

const CustomerLogos = () => {
    return (
        <StyledCustomerLogos>
            <HeadingCustomerLogos>
                <TitleText>Donors, Partners & Sponsors</TitleText>
                <PreviewText>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value.</PreviewText>
                <LinkButton description="Become a sponsor" width="168px" height="24px"></LinkButton>
            </HeadingCustomerLogos>
            <ContainerCustomerLogos>
                <RowCustomerLogos>
                    <TechCard>
                    <CardCustomerLogos>
                        <LogoTextContainer>
                            <LogoCustomerLogos width="80px"><image xlinkHref={Stripe} /></LogoCustomerLogos>
                            <TextCustomerLogos>Partner since 2015</TextCustomerLogos>                           
                        </LogoTextContainer>
                        <a href="https://stripe.com/en-pl" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a> 
                    </CardCustomerLogos>
                    <CardCustomerLogos >
                        <LogoCustomerLogos width="140px"><image xlinkHref={Spotify} /></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>
                    </CardCustomerLogos>
                    </TechCard>
                    <TechCard>
                    <CardCustomerLogos>
                        <LogoCustomerLogos width="153px"><image xlinkHref={Tesla}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.tesla.com/pl_pl" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>  
                    </CardCustomerLogos>
                    <CardCustomerLogos >
                        <LogoCustomerLogos width="103px"><image xlinkHref={ Twitch}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>  
                    </CardCustomerLogos>
                    </TechCard>
                </RowCustomerLogos>
                <RowCustomerLogos>
                    <TechCard>
                    <CardCustomerLogos>
                        <LogoCustomerLogos width="87px"><image xlinkHref={Intel}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>  
                    </CardCustomerLogos>
                    <CardCustomerLogos>
                        <LogoCustomerLogos width="115px"><image xlinkHref={Shell}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.shell.pl/" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>  
                    </CardCustomerLogos>
                    </TechCard>
                    <TechCard>
                    <CardCustomerLogos>
                        <LogoCustomerLogos width="107px"><image xlinkHref={Netflix}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.netflix.com/pl/" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>  
                    </CardCustomerLogos>
                    <CardCustomerLogos>
                        <LogoCustomerLogos width="114.24px"><image xlinkHref={Nestle}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.nestle.pl/" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>  
                    </CardCustomerLogos>
                    </TechCard>    
                </RowCustomerLogos>
                <RowCustomerLogos>  
                    <TechCard>    
                    <CardCustomerLogos>
                        <LogoCustomerLogos width="112px"><image xlinkHref={Fedex}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.fedex.com/pl-pl/home.html" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>  
                    </CardCustomerLogos>
                    <CardCustomerLogos>
                        <LogoCustomerLogos width="106px"><image xlinkHref={Disney}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.disney.pl/" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>  
                    </CardCustomerLogos>
                    </TechCard>
                    <TechCard>
                    <CardCustomerLogos>
                        <LogoCustomerLogos width="38px"><image xlinkHref={BMW}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.bmw.pl/pl/index.html" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a> 
                    </CardCustomerLogos>
                    <CardCustomerLogos>
                        <LogoCustomerLogos width="96px"><image xlinkHref={CocaCola}/></LogoCustomerLogos>
                        <TextCustomerLogos>Partner since 2015</TextCustomerLogos>
                        <a href="https://www.coca-colacompany.com/" target="_blank" rel="noopener noreferrer"><TransparentButton description="Visit website"/></a>  
                    </CardCustomerLogos>
                    </TechCard>    
                </RowCustomerLogos>
            </ContainerCustomerLogos>
        </StyledCustomerLogos>

    )
}
export default CustomerLogos
 