import styled from 'styled-components'

import Title from '../reusableComponents/Title'
import TextSupporting from '../reusableComponents/TextSupporting'
import Button from '../reusableComponents/Button'

import image1 from '../assets/foto/mockup2.png'
import image2 from '../assets/foto/mockup1.png'
import image3 from '../assets/foto/mockup3.png'
import arrowRight from '../assets/arrowRight.png'

const title1 = "Flowbite Green is a climate chage non-profit organization.";
const title2 = "Protect our earth against climate change and pollution.";
const title3 = "Together we can restore our earth against climate change.";
const textSupporting = "Flowbite helps you connect friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Group.";

const Container = styled.div`
	width: 1440px;
	height: 1444px;
	background-color: #111928;
	display: flex;
	justify-content: center;
	
	@media( max-width: 640px) {
		width: 375px;
		height: auto;
		align-items: center;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 675px;
		height: auto;
		align-items: center;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		width: 980px;
		height: auto;
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		width: 1220px;
		height: auto;
		padding-top: 30px;
		padding-bottom: 30px;
	}
`
const Content = styled.div`
	width: 1280px;
	height: 1348px;
	gap: 64px;
	display: flex;
	align-items: space-between;
	flex-direction: column;
	padding-top: 30px;
	
	@media( max-width: 640px) {
		width: 375px;
		height: auto;
		align-items: center;
		gap: 32px;
		padding-bottom: 30px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 375px;
		height: auto;
		align-items: center;
		gap: 32px;
		padding-bottom: 30px;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		width: 980px;
		height: auto;
		align-items: center;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		width: 1160px;
		height: auto;
	}
`
const Row = styled.div`
	width: 1280px;
	height: 406px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 343px;
		height: auto;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		width: 900px;
		height: auto;
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		width: 1160px;
		height: auto;
	}
`
const Mockup = styled.div`
	width: 540px;
	height: 406px;
	border-radius: 8px;
	
	@media( max-width: 640px) {
		display: none;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		display: none;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		display: none;
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		width: 480px;
		height: auto;
	}
`
const SmallContainer = styled.div`
	width: 640px;
	height: 260px;
	gap: 24px;
	display: flex;
	flex-direction: column;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 343px;
		height: auto;
	}
`
const Img = styled.img`
	width: 105%;
	transform: translateX(-3%); 
`
const Buttons = styled.div`
	width: 284px;
	height: 41px;
	gap: 16px;
	display: flex;
`
const titleProps = window.innerWidth <= 768 ? {
  	fontSize: '30px', 
  	lineHeight: '37.5px', 
  	width: '343px',
  	height: 'auto',
} : {
  	fontSize: '36px',
  	lineHeight: '45px',
	width: '620px',
};

const textSupportingProps = window.innerWidth <= 768 ? {
  	width: '343px',
  	height: '162px',
} : {
	width: '630px',
};

const CtaOne = () => {
	return (
		<Container>
			<Content>
				<Row>
					<Mockup><Img src={image1}/></Mockup>
					<SmallContainer>
						<Title 	text={title1}
								fontSize={titleProps.fontSize}
  								lineHeight={titleProps.lineHeight}
								width={titleProps.width}
								height={titleProps.height} />
						<TextSupporting 
								text={textSupporting}
								lineHeight="27px"
								fontSize="18px"
								width={textSupportingProps.width}
								height={textSupportingProps.height} />
						<Buttons>
							<Button 
							description="Get involved"
							width="152px"
							iconRight={arrowRight}/>
							<Button 
							description="Learn more"
							width="116px"
							border="1px solid #4B5563"
							color="#9CA3AF"
							backgroundColor="#1F2A37"/>
						</Buttons>
					</SmallContainer>
				</Row>
				<Row>
					<SmallContainer>
						<Title text={title2}
								fontSize={titleProps.fontSize}
  								lineHeight={titleProps.lineHeight}
								width={titleProps.width}
								height={titleProps.height} />
						<TextSupporting 
								text={textSupporting}
								lineHeight="27px"
								fontSize="18px"
								width={textSupportingProps.width}
								height={textSupportingProps.height} />
						<Buttons>
							<Button 
							description="View all activities"
							width="184px"
							iconRight={arrowRight}/>
						</Buttons>
					</SmallContainer>
					<Mockup><Img src={image2}/></Mockup>
				</Row>
				<Row>
					<Mockup><Img src={image3}/></Mockup>
					<SmallContainer>
						<Title text={title3}
								fontSize={titleProps.fontSize}
  								lineHeight={titleProps.lineHeight}
								width={titleProps.width}
								height={titleProps.height} />
						<TextSupporting 
								text={textSupporting}
								lineHeight="27px"
								fontSize="18px"
								width={textSupportingProps.width}
								height={textSupportingProps.height} />
						<Buttons>
							<Button 
							description="Read more"
							width="140px"
							iconRight={arrowRight}/>
						</Buttons>
					</SmallContainer>
				</Row>
			</Content>
		</Container>
	);
}
export default CtaOne;