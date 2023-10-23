import styled from "styled-components";
import LinkButton from "../generalComponents/LinkButton";
import HeadingText from "../generalComponents/HeadingText";
import SupportingText from "../generalComponents/SupportingText";
import Stripe from "../image/Stripe.svg"
import Spotify from "../image/Spotify.svg"
import Tesla from "../image/Tesla.svg"
import Twitch from "../image/Twitch.svg"
import Intel from "../image/Intel.svg"
import Shell from "../image/Shell.svg"
import Netflix from "../image/Netflix.svg"
import Nestle from "../image/Nestle.svg"  
import Fedex from "../image/Fedex.svg"
import Disney from "../image/Disney.svg"
import BMW from "../image/BMW.svg"
import CocaCola from "../image/CocaCola.svg"
import TransparentButton from "../generalComponents/TransparentButton";
import { Link } from 'react-router-dom';
import NewSponsor from "../subpages/NewSponsor";

const StyledCustomerLogos = styled.div`
width: 1440px;
height: 877px;
border: 1px; 0px 96px 0px;
gap: 64px;
display: flex;
background: #1F2A37;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const HeadingCustomerLogos = styled.div`
width:672px;
height: 161px;
gap: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ContainerCustomerLogos = styled.div`
width: 1280px;
heigh: 460px;
gap: 32px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const RowCustomerLogos = styled.div`
width: 1280px;
height: 132px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
const CardCustomerLogos = styled.div`
width: 320px;
heigh: 132px;
border-radius: 8px;
gap: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
font-family: Inter;
font-weight:400;
font-size: 16px;
line-height: 20px;
color: #6B7280;
display: flex;
justify-content: center;
align-items: center;
`

const CustomerLogos = () => {
    return (
        <StyledCustomerLogos>
            <HeadingCustomerLogos>
                <HeadingText width="672px" height="45px" description="Donors, Partners & Sponsors" display="flex" justifyContent="center" alignItems="center"></HeadingText>
                <SupportingText width="672px" height="60px" description="Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value." display="flex" justifyContent="center" alignItems="center"></SupportingText>
                <LinkButton description="Become a sponsor" width="168px" height="24px"><NewSponsor/></LinkButton>
            </HeadingCustomerLogos>
            <ContainerCustomerLogos>
                <RowCustomerLogos>
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
                </RowCustomerLogos>
                <RowCustomerLogos>
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
                </RowCustomerLogos>
                <RowCustomerLogos>    
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
                </RowCustomerLogos>
            </ContainerCustomerLogos>
        </StyledCustomerLogos>

    )
}
export default CustomerLogos
 