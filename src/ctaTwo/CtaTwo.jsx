import styled from 'styled-components'

import ProgressBar from '../ctaTwo/ProgressBar'
import Button from '../reusableComponents/Button'
import Title from '../reusableComponents/Title'
import TextSupporting from '../reusableComponents/TextSupporting'

import arrowRightBlue from '../assets/arrowRightBlue.png'
import image1 from '../assets/foto/mockup2.png'
import image2 from '../assets/foto/mockup5.png'
import share from '../assets/share.png'

const Container = styled.div`
	background-color: #111928;
	width: 1440px;
	height: 997px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Content = styled.div`
	width: 1280px;
	height: 805px;
	gap: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`
const Heading = styled.div`
	width: 676px;
	height: 121px;
	gap: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Cards = styled.div`
	width: 1280px;
	height: 593px;
	gap: 48px;
	display: flex;
	justify-content: space-between;
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
	
`
const ImgBox = styled.div`
	width: 552px;
	height: 288px;
	border-radius: 8px;
	overflow: hidden;
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
`
const Buttons = styled.div`
	width: 552px;
	height: 41px;
	gap: 16px;
	display: flex;
`

const CtaTwo = () => {
	return (
		<Container>
			<Content>
				<Heading>
					<Title 
						width="640px"
						height="45px"
						text="Fundraising events"
						fontSize="36px"
						textAlign="center"
						lineHeight="45px"/>
					<TextSupporting 
						text="Flowbite helps you connect with friends, family and communities of people who share your interests. "
						textAlign="center"
						width="640px"
						height="60px"/>
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
							width="552px"
							height="23px"/>
						<TextSupporting 
							text="Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone."
							fontSize="16px"
							width="552px"
							height="72px"
							lineHeight="24px"/>
						<Buttons>
							<Button 
							description="Donate now"
							width="121px"
							lineHeight="21px"/>
							<Button 
							description="Share this Fundraiser"
							width="210px"
							lineHeight="21px"
							border="1px solid #4B5563"
							backgroundColor="#1F2A37" 
							color="#9CA3AF"
							iconLeft={share}/>
						</Buttons>
					</Card>
					<Card>
						<ImgBox><Img src={image2} /></ImgBox>
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
							width="552px"
							height="23px"/>
						<TextSupporting 
							text="Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone."
							fontSize="16px"
							width="552px"
							height="72px"
							lineHeight="24px"/>
						<Buttons>
							<Button 
							description="Donate now"
							width="121px"
							lineHeight="21px"/>
							<Button 
							description="Share this Fundraiser"
							width="210px"
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