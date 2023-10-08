import styled from 'styled-components'

import Button from '../reusableComponents/Button'
import Title from '../reusableComponents/Title'
import TextSupporting from '../reusableComponents/TextSupporting'
import Slider from '../hero/Slider'

import videoCamera from '../assets/videoCamera.png'
import image1 from '../assets/foto/mockup4.png'
import image2 from '../assets/foto/mockup3.png'
import image3 from '../assets/foto/mockup1.png'
import intel from '../assets/intel.png'
import FedEx from '../assets/FedEx.png'
import visa from '../assets/visa.png'
import Disney from '../assets/Disney.png'

const images = [image1, image2, image3];
const textTitle = "Making earth cooler for people, nature, climate";
const supportingText = "Protecting the planet and its natural resources for future generations, by reducing pollution, promoting sustainability, and coserving energy and resources."
	
const HeroContainer = styled.div`
	width: 1440px;
	height: 626px;
	background-color: #111928;
	display: flex;
	justify-content: center;
	align-items: center;
	
	@media( max-width: 640px) {
		width: 375px;
		height: 638px;
	}
`
const HeroContent = styled.div`
	width: 1280px;
	height: 434px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	@media( max-width: 640px) {
		width: 343px;
		height: 638px;
		flex-direction: column;
		justify-content: space-around;
	}
`
const LeftItem = styled.div`
	width: 576px;
	height: 434px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 16px;
	
	@media( max-width: 640px) {
		width: 343px;
		height: 382px;
		flex-direction: column;
	}
`
const TitleDesc = styled.div`
	margin: 0;
	padding: 0;
	width: 576px;
	height: 206px;
	gap: 20px;
	display: flex;
	flex-direction: column;
	
	@media( max-width: 640px) {
		width: 343px;
		height: 206px;
	}
`
const Buttons = styled.div`
	width: 380px;
	height: 48px;
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
	margin-bottom: 15px;
	
	@media( max-width: 640px) {
		width: 343px;
		height: 112px;
		gap: 16px;
		flex-direction: column;
		margin-top: 5px;
		margin-bottom: 10px;
	}
`
const SponsorsContainer = styled.div`
	width: 576px;
	height: 116px;
	padding-top: 32px;
	border-top: 1px solid #374151;
	
	@media( max-width: 640px) {
		width: 340px;
		height: 32px;
		padding-top: 0;
		border-top: none;
	}
`
const Sponsors = styled.p`
	font-size: 16px;
	line-height: 24px;
	color: #6B7280;
	font-weight: 500;
	text-align: left;
	margin: 0;
	
	@media( max-width: 640px) {
		display: none;
	}
`
const RightItem = styled.div`
	width: 576px;
	height: 360px;
	border-radius: 8px;
	
	@media( max-width: 640px) {
		width: 343px;
		height: 176px;
	}
`
const SvgContainer = styled.div`
	width: 576px;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	gap: 45px;
	position: relative;
	
	@media( max-width: 640px) {
		width: 340px;
		height: 32px;
		margin-top: 0;
		gap: 10px;
	}
`
const Svg = styled.svg`
	padding-top: 10px;
	height: 48px;
	display: flex;
	align-items: center;
	position: relative;
	
	@media( max-width: 640px) {
		padding-top: 0px;
		width: 80px;
		height: 32px;
		
		
	}
`
const Image = styled.image`
	width: 100%;
	position: absolute;
	bottom: 0;
	vertical-align: bottom;
	
`

const titleProps = window.innerWidth <= 640 ? {
  	fontSize: '30px', 
  	lineHeight: '30px', 
  	width: '343px',
  	height: '90px',
} : {
  	fontSize: '48px',
  	lineHeight: '48px',
};

const textSupportingProps = window.innerWidth <= 640 ? {
  	fontSize: '16px', 
  	lineHeight: '24px', 
  	width: '343px',
  	height: '96px',
} : {};

const buttonProps = window.innerWidth <= 640 ? {
	width: '343px',
} : {
	width: '182px',
};

const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				<LeftItem>
					<TitleDesc>
						<Title 
							text={textTitle}
  							fontSize={titleProps.fontSize}
  							lineHeight={titleProps.lineHeight}
							width={titleProps.width}
							height={titleProps.height}/>
						<TextSupporting 
							text={supportingText} 
							fontSize={textSupportingProps.fontSize}
  							lineHeight={textSupportingProps.lineHeight}
							width={textSupportingProps.width}
							height={textSupportingProps.height}/>
					</TitleDesc> 
					<Buttons>
						<Button 
							description="Donate now" 
							height="48px" 
							width={buttonProps.width}>
						</Button>
						<Button 
							description="Learn more" 
							backgroundColor="#1F2A37"
							height="48px" 
							width={buttonProps.width}
							color="#9CA3AF"
							border="1px solid #4B5563"
							iconLeft={videoCamera}>	
						</Button>
					</Buttons>
					<SponsorsContainer>
						<Sponsors>Sponsors:</Sponsors>
						<SvgContainer>
							<Svg><Image xlinkHref={intel}  alt="Logo"/></Svg>
							<Svg><g transform="translate(0, +10)"><Image xlinkHref={FedEx}  alt="Logo"/></g></Svg>
							<Svg><g transform="translate(+3, +6)"><Image xlinkHref={visa}  alt="Logo"/></g></Svg>
							<Svg><g transform="translate(0, +3)"><Image xlinkHref={Disney}  alt="Logo"/></g></Svg>
						</SvgContainer>
					</SponsorsContainer>
				</LeftItem>
				<RightItem>
					<Slider images={images}/>
				</RightItem>
			</HeroContent>
		</HeroContainer>
	);
}
export default Hero;