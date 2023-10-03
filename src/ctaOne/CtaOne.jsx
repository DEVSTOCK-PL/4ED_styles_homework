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
`
const Content = styled.div`
	width: 1280px;
	height: 1348px;
	gap: 64px;
	display: flex;
	align-items: space-between;
	flex-direction: column;
`
const Row = styled.div`
	width: 1280px;
	height: 406px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Mockup = styled.div`
	width: 540px;
	height: 406px;
	border-radius: 8px;
`
const SmallContainer = styled.div`
	width: 640px;
	height: 260px;
	gap: 24px;
	display: flex;
	flex-direction: column;
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
const CtaOne = () => {
	return (
		<Container>
			<Content>
				<Row>
					<Mockup><Img src={image1}/></Mockup>
					<SmallContainer>
						<Title 	text={title1}
								fontSize="36px"
								lineHeight="45px"
								width="620px"/>
						<TextSupporting 
								text={textSupporting}
								lineHeight="27px"
								fontSize="18px"
								width="630px" />
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
								fontSize="36px"
								lineHeight="45px"
								width="620px"/>
						<TextSupporting 
								text={textSupporting}
								lineHeight="27px"
								fontSize="18px"
								width="630px" />
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
								fontSize="36px"
								lineHeight="45px"
								width="620px"/>
						<TextSupporting 
								text={textSupporting}
								lineHeight="27px"
								fontSize="18px"
								width="630px" />
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