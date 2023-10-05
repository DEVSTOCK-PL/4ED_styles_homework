import styled from 'styled-components'
import Button from '../reusableComponents/Button'
import Logotyp from '../assets/Logo.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import dribbble from '../assets/dribbble.png'
import facebook from '../assets/facebook.png'

const Container = styled.div`
	width: 1440px;
	height: 569px;
	background-color: #1F2A37;
	border-top: 1px solid #374151;
	padding-top: 96px;
	padding-bottom: 64px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
`
const Content = styled.div`
	width: 1280px;
	height: 409px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
`
const NavLinks = styled.div`
	width: 1280px;
	height: 221px;
	display: flex;
	justify-content: space-between;
`
const LogoAndSocialLinks = styled.div`
	width: 384px;
	height: 124px;
	display: flex;
	gap: 20px;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
`
const Column = styled.div`
	width: 176px;
	height: 221px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`
const HeadingLinks = styled.div`
	width: 176px;
	height: 21px;
	color: #FFFFFF;
	line-height: 21px;
	font-size: 14px;
	font-weight: 500;
	text-align: left;
`
const Link = styled.a`
	width: 176px;
	height: 24px;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #9CA3AF;
	text-align: left;
`
const LogoFlowbite = styled.div`
	width: 144px;
	height: 36px;
	display: flex;
	gap: 12px;
	font-size: 24px;
	font-weight: 600;
	line-height: 36px;
`
const Svg = styled.svg`
	width: 32px;
	height: 32px;
`
const CopyRight = styled.div`
	width: 384px;
	height: 24px;
	line-height: 24px;
	font-size: 16px;
	font-weight: 400;
	color: #9CA3AF;
	text-align: center;
`
const SocialLinks = styled.div`
	width: 156px;
	height: 24px;
	display: flex;
	gap: 20px;
`
const Footer = () => {
	return (
		<Container>
			<Content>
				<NavLinks>
					<Column>
						<HeadingLinks>COMPANY</HeadingLinks>
						<Link>About</Link>
						<Link>Premium</Link>
						<Link>Blog</Link>
						<Link>Affiliate Program</Link>
						<Link>Get Coupon</Link>
					</Column>
					<Column>
						<HeadingLinks>HELP AND SUPPORT</HeadingLinks>
						<Link>Contact Us</Link>
						<Link>Knowledge Center</Link>
						<Link>Premium Support</Link>
						<Link>Sponsorships</Link>
					</Column>
					<Column>
						<HeadingLinks>LEARNING</HeadingLinks>
						<Link>Learn Hub</Link>
						<Link>Manuals</Link>
						<Link>Tutorials</Link>
						<Link>Communities</Link>
					</Column>
					<Column>
						<HeadingLinks>RESOURCES</HeadingLinks>
						<Link>Third-Party Tools</Link>
						<Link>Illustration</Link>
						<Link>Themesberg</Link>
						<Link>Bluehost</Link>
						<Link>Stock Photos</Link>
					</Column>
					<Column>
						<HeadingLinks>LEGAL</HeadingLinks>
						<Link>Privacy Policy</Link>
						<Link>Terms & Conditions</Link>
						<Link>EULA</Link>
					</Column>
				</NavLinks>
				<LogoAndSocialLinks>
					<LogoFlowbite>
						<Svg><image xlinkHref={Logotyp} /></Svg>Flowbite
					</LogoFlowbite>
					<CopyRight>© 2022 Flowbite, Inc. All rights reserved.</CopyRight>
					<SocialLinks>
						<Button 
							width="24px"
							height="24px"
							backgroundColor="transparent"
							iconLeft={github}
							marginRight="0px"/>
							<Button 
							width="24px"
							height="24px"
							backgroundColor="transparent"
							iconLeft={twitter}
							marginRight="0px"/>
							<Button 
							width="24px"
							height="24px"
							backgroundColor="transparent"
							iconLeft={dribbble}
							marginRight="0px"/>
							<Button 
							width="24px"
							height="24px"
							backgroundColor="transparent"
							iconLeft={facebook}
							marginRight="0px"/>
					</SocialLinks>
				</LogoAndSocialLinks>
			</Content>
		</Container>
	);
}
export default Footer;