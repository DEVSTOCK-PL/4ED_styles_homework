import styled from 'styled-components'
import Button from '../reusableComponents/Button'
import Logotyp from '../assets/Logo.png'

const NavbarContainer = styled.div`
	background-color: #111928;
	width: 1440px;
	height: 65px;
	display: flex;
	justify-content: center;
	align-items: end;
`
const NavbarContent = styled.div`
	display: flex;
	align-items: end;
	width: 1280px;
	height: 41px;
	gap: 64px;
`
const Logo = styled.div`
	display: flex;
	width: 102px;
	height: 36px;
	gap: 12px;
	font-family: Inter;
	font-size: 24px;
	font-weight: 600;
	line-height: 36px;
	letter-spacing: 0em;
	text-align: left;
`
const Svg = styled.svg`
	width: 32px;
	height: 32px;
`
const LogIn = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
	gap: 16px;
`
const Links = styled.div`
	display: flex;
	align-items: end;
	justify-content: start;
	width: 876px;
	height: 24px;
	gap: 32px;
	padding-bottom: 8px;
`

function Navbar () {
	return(
		<NavbarContainer>
			<NavbarContent>
				<Logo>
					<Svg><image xlinkHref={Logotyp}  alt="Logo Firmy"/></Svg>
					Logo
				</Logo>
				<Links>
					<a>Company</a>
					<a>Marketplace</a>
					<a>Features</a>
					<a>Team</a>
					<a>Contact</a>
				</Links>
				<LogIn>Log In<Button description="Get Started"/></LogIn>
			</NavbarContent>
		</NavbarContainer>
	)
}
export default Navbar;