import styled from 'styled-components'
import Button from '../reusableComponents/Button'
import Slider from '../hero/Slider'
import videoCamera from '../assets/videoCamera.png'
import image1 from '../assets/foto/mockup4.png'
import image2 from '../assets/foto/mockup3.png'
import image3 from '../assets/foto/mockup1.png'

const images = [image1, image2, image3];

const HeroContainer = styled.div`
	width: 1440px;
	height: 626px;
	background-color: #111928;
	display: flex;
	justify-content: center;
	align-items: center;
`
const HeroContent = styled.div`
	width: 1280px;
	height: 434px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const LeftItem = styled.div`
	width: 576px;
	height: 434px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`
const TitleDesc = styled.div`
	width: 576px;
	height: 206px;
	border: 1px solid #374151;
`
const Buttons = styled.div`
	width: 380px;
	height: 48px;
	display: flex;
	justify-content: space-between;
`
const Sponsors = styled.div`
	width: 576px;
	height: 116px;
	padding-top: 32px;
	font-size: 16px;
	line-height: 24px;
	border-top: 1px solid #374151;
	border: 1px solid #374151;
`
const RightItem = styled.div`
	width: 576px;
	height: 360px;
	border-radius: 8px;
`

const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				<LeftItem>
					<TitleDesc></TitleDesc>
					<Buttons>
						<Button 
							description="Donate now" 
							height="48px" 
							width="182px">
						</Button>
						<Button 
							description="Learn more" 
							backgroundColor="#1F2A37"
							height="48px" 
							width="182px"
							color="#9CA3AF"
							border="1px solid #4B5563"
							iconLeft={videoCamera}>	
						</Button>
					</Buttons>
					<Sponsors></Sponsors>
				</LeftItem>
				<RightItem>
					<Slider images={images}/>
				</RightItem>
			</HeroContent>
		</HeroContainer>
	);
}
export default Hero;