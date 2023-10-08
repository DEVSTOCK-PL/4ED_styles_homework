import styled from 'styled-components'

import ProgressBar from '../ctaTwo/ProgressBar'
import Button from '../reusableComponents/Button'
import Title from '../reusableComponents/Title'
import TextSupporting from '../reusableComponents/TextSupporting'

import arrowRightBlue from '../assets/arrowRightBlue.png'
import image1 from '../assets/foto/mockup2.png'
import image2 from '../assets/foto/mockup5.png'
import image3 from '../assets/foto/mockup6.png'
import share from '../assets/share.png'

const Container = styled.div`
	background-color: #111928;
	width: 1440px;
	height: 997px;
	display: flex;
	justify-content: center;
	align-items: center;
	
	@media( max-width: 640px) {
		width: 375px;
		height: auto;
		padding-top: 10px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 675px;
		height: auto;
		padding-top: 10px;
	}
`
const Content = styled.div`
	width: 1280px;
	height: 805px;
	gap: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
		gap: 16px;
		margin-bottom: 20px;
		margin-top: 20px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 643px;
		height: auto;
		gap: 16px;
		margin-bottom: 20px;
		margin-top: 20px;
	}
`
const Heading = styled.div`
	width: 676px;
	height: 121px;
	gap: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 643px;
		height: auto;
	}
`
const Cards = styled.div`
	width: 1280px;
	height: 593px;
	gap: 48px;
	display: flex;
	justify-content: space-between;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
		flex-direction: column;
		gap: 16px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 643px;
		height: auto;
		flex-direction: column;
		gap: 16px;
		align-items: center;
	}
`
const Card = styled.div`
	width: 616px;
	height: 593px;
	border-radius: 8px;
	border: 1px solid #374151;
	background-color: #1F2A37;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 443px;
		height: auto;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	
`
const ImgBox = styled.div`
	width: 552px;
	height: 288px;
	border-radius: 8px;
	overflow: hidden;
	
	@media( max-width: 640px) {
		width: 303px;
		height: 288px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 403px;
		height: 288px;
	}
`
const Img = styled.img`
	width: 110%;
	height: 110%;
	border-radius: 8px;
	transform: translateX(-5%);
`
const ProgressBarContainer = styled.div`
	width: 552px;
	height: 41px;
	
	@media( max-width: 640px) {
		width: 303px;
		height: 41px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 403px;
		height: 41px;
		margin-bottom: 10px;
	}
`
const Buttons = styled.div`
	width: 552px;
	height: 41px;
	gap: 16px;
	display: flex;
	
	@media( max-width: 640px) {
		width: 314px;
		height: auto;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 314px;
		height: auto;
		flex-direction: column;
		align-items: center;
	}
`
const titleProps = window.innerWidth <= 768 ? {
  	fontSize: '30px', 
  	lineHeight: '37.5px', 
  	width: '343px',
  	height: 'auto',
} : {
  	width: "640px",
	height: "45px",
	fontSize: "36px",
	lineHeight: "45px",
};

const textSupportingProps = window.innerWidth <= 768 ? {
  	fontSize: '16px', 
  	lineHeight: '24px', 
  	width: '343px',
  	height: 'auto',
} : {
  	width: "640px",
	height: "60px",
};

const title2Props = window.innerWidth <= 640 ? {
  	width: '303px',
  	height: 'auto',
} : (window.innerWidth >= 641 && window.innerWidth <= 768) ? {
	width: '403px',
  	height: 'auto',
} : {
  	width: "552px",
	height: "23px",
};

const textSupporting2Props = window.innerWidth <= 640 ? {
  	width: '303px',
  	height: 'auto',
} : (window.innerWidth >= 641 && window.innerWidth <= 768) ? {
	width: '403px',
  	height: 'auto',
} : {
  	width: "552px",
	height: "72px",
};

const buttonProps = window.innerWidth <= 768 ? {
	width: '303px',
} : {
	width: '121px',
};

const button2Props = window.innerWidth <= 768 ? {
	width: '303px',
} : {
	width: '210px',
};

const image88 = window.innerWidth <= 768 ? image3 : image2; 

const CtaTwo = () => {
	return (
		<Container>
			<Content>
				<Heading>
					<Title 
						text="Fundraising events"
						textAlign="center"
						fontSize={titleProps.fontSize}
  						lineHeight={titleProps.lineHeight}
						width={titleProps.width}
						height={titleProps.height}/>
					<TextSupporting 
						text="Flowbite helps you connect with friends, family and communities of people who share your interests. "
						textAlign="center"
						fontSize={textSupportingProps.fontSize}
  						lineHeight={textSupportingProps.lineHeight}
						width={textSupportingProps.width}
						height={textSupportingProps.height}/>
				</Heading>
				<Cards>
					<Card>
						<ImgBox><Img src={image1} /></ImgBox>
						<ProgressBarContainer>
							<ProgressBar 
							donors="3473"
							colected="276856"
							goal="400000"/>
						</ProgressBarContainer>
						<Title 
							text="Thank you for supporting in planting trees work. "
							fontWeight="700"
							fontSize="18px"
							lineHeight="22.5px"
							width={title2Props.width}
							height={title2Props.height}/>
						<TextSupporting 
							text="Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone."
							fontSize="16px"
							lineHeight="24px"
							width={textSupporting2Props.width}
							height={textSupporting2Props.height}/>
						<Buttons>
							<Button 
							description="Donate now"
							width={buttonProps.width}
							lineHeight="21px"/>
							<Button 
							description="Share this Fundraiser"
							width={button2Props.width}
							lineHeight="21px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37" 
							color="#9CA3AF"
							iconLeft={share}/>
						</Buttons>
					</Card>
					<Card>
						<ImgBox><Img src={image88} /></ImgBox>
						<ProgressBarContainer>
							<ProgressBar 
							donors="473"
							colected="36856"
							goal="150000"/>
						</ProgressBarContainer>
						<Title 
							text="Thank you for supporting our lifesaving work."
							fontWeight="700"
							fontSize="18px"
							lineHeight="22.5px"
							width={title2Props.width}
							height={title2Props.height}/>
						<TextSupporting 
							text="Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone."
							fontSize="16px"
							lineHeight="24px"
							width={textSupporting2Props.width}
							height={textSupporting2Props.height}/>
						<Buttons>
							<Button 
							description="Donate now"
							width={buttonProps.width}
							lineHeight="21px"/>
							<Button 
							description="Share this Fundraiser"
							width={button2Props.width}
							lineHeight="21px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37" 
							color="#9CA3AF"
							iconLeft={share}/>
						</Buttons>
					</Card>
				</Cards>
				<Button 
					description="View all fundraising events"
					backgroundColor='#111928'
					width="280px"
					height="27px"
					color="#3F83F8"
					iconRight={arrowRightBlue}
					fontSize="18px"
					fontWeight="400"/>
			</Content>
		</Container>
	);
}
export default CtaTwo;