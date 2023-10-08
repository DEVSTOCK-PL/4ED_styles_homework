import styled from 'styled-components'

import Title from '../reusableComponents/Title'
import TextSupporting from '../reusableComponents/TextSupporting'
import Button from '../reusableComponents/Button'

import arrowRightBlue from '../assets/arrowRightBlue.png'
import externalLink from '../assets/externalLink.png'

import Stripe from '../assets/Stripe.png'
import intel from '../assets/intel.png'
import FedEx from '../assets/FedEx.png'
import cocacola from '../assets/cocacola.png'
import Disney from '../assets/Disney.png'
import Spotify from '../assets/Spotify.png'
import Tesla from '../assets/Tesla.png'
import twitch from '../assets/twitch.png'
import Shell from '../assets/Shell.png'
import netflix from '../assets/netflix.png'
import Nestle from '../assets/Nestle.png'
import bmw from '../assets/bmw.png'

const Container = styled.div`
	background-color: #1F2A37;
	width: 1440px;
	height: 877px;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 64px;
	padding-top: 96px;
	border-top: 1px solid #374151;
	border-bottom: 1px solid #374151;
	
	@media( max-width: 640px) {
		width: 375px;
		height: auto;
		padding-top: 36px;
	}
`
const Haeding = styled.div`
	width: 672px;
	height: 161px;
	gap: 16px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
	}
`
const Logos = styled.div`
	width: 1280px;
	height: 460px;
	gap: 32px;
	display: flex;
	align-items: space-between;
	flex-direction: column;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}
`
const Row = styled.div`
	width: 1280px;
	height: 132px;
	display: flex;
	justify-content: space-between;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: space-between;
	}
`
const Card = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	flex-direction: column;
	width: 320px;
	height: 132px;
	gap: 20px;
	
	@media( max-width: 640px) {
		width: 142px;
		height: 132px;
		margin-bottom: 30px;
	}
`
const Svg = styled.svg`
	text-align: center;
	height: 54px;
`
const P = styled.p`
	line-height: 20px;
	color: #6B7280;
	font-size: 16px;
	font-weight: 400;
	text-align: center;
	padding: 0;
	margin: 0;
`
const Image = styled.image`
	height: 44px;
	transform: translateX(+25%);
`
const titleProps = window.innerWidth <= 640 ? {
  	fontSize: '30px', 
  	lineHeight: '37.5px', 
  	width: '343px',
  	height: 'auto',
} : {
  	fontSize: '36px',
  	lineHeight: '45px',
	width: 'auto',
	height: '45px',
};

const textSupportingProps = window.innerWidth <= 640 ? {
  	fontSize: '16px', 
  	lineHeight: '24px', 
  	width: '343px',
  	height: 'auto',
} : {
	fontSize: '20px', 
  	lineHeight: '30px', 
  	width: '650px',
  	height: '60px',
};

const CustomerLogos = () => {
	return (
		<Container>
			<Haeding>
				<Title 
					text="Donors, Partners & Sponsors"
					textAlign="center"
					fontSize={titleProps.fontSize}
  					lineHeight={titleProps.lineHeight}
					width={titleProps.width}
					height={titleProps.height}/>
				<TextSupporting 
					text="Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value."
					textAlign="center"
					fontSize={textSupportingProps.fontSize}
  					lineHeight={textSupportingProps.lineHeight}
					width={textSupportingProps.width}
					height={textSupportingProps.height}/>
				<Button 
					description="Become a sponsor"
					backgroundColor='#1F2A37'
					width="188px"
					height="24px"
					color="#3F83F8"
					iconRight={arrowRightBlue}
					fontSize="16px"/>
			</Haeding>
			<Logos>
				<Row>
					<Card>
						<Svg><g transform="translate(+38)"><Image xlinkHref={Stripe}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
					<Card>
						<Svg><g transform="translate(+13)"><Image xlinkHref={Spotify}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
					<Card>
						<Svg><g transform="translate(+5)"><Image xlinkHref={Tesla}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
					<Card>
						<Svg><g transform="translate(+11)"><Image xlinkHref={twitch}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
				</Row>
				<Row>
					<Card>
						<Svg><g transform="translate(+25)"><Image xlinkHref={intel}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
					<Card>
						<Svg><g transform="translate(-2)"><Image xlinkHref={Shell}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
					<Card>
						<Svg><g transform="translate(-2)"><Image xlinkHref={netflix}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
					<Card>
						<Svg><g transform="translate(-2)"><Image xlinkHref={Nestle}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
				</Row>
				<Row>
					<Card>
						<Svg><g transform="translate(+2)"><Image xlinkHref={FedEx}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
					<Card>
						<Svg><g transform="translate(+18)"><Image xlinkHref={Disney}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
					<Card>
						<Svg><g transform="translate(+52)"><Image xlinkHref={bmw}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
					<Card>
						<Svg><g transform="translate(+12)"><Image xlinkHref={cocacola}  alt="Logo"/></g></Svg>
						<P>Partner since 2015</P>
						<Button
							iconLeft={externalLink}
							description="Visit website"
							lineHeight="18px"
							fontSize="12px"
							color="#9CA3AF"
							width="122px"
							height="34px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37"/>
					</Card>
				</Row>
			</Logos>
		</Container>
	);
}
export default CustomerLogos;