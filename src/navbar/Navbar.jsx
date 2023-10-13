import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../reusableComponents/Button'
import Logotyp from '../assets/Logo.png'
import menu from '../assets/menu.png'

const NavbarContainer = styled.div`
	background-color: #111928;
	width: 1440px;
	height: 65px;
	display: flex;
	justify-content: center;
	align-items: end;
	
	@media (max-width: 640px) {
		width: 375px;
		height: 60px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 675px;
		height: 60px;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		width: 980px;
		height: 60px;
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		width: 1220px;
		height: 65px;
	}
`
const NavbarContent = styled.div`
	display: flex;
	align-items: end;
	width: 1280px;
	height: 41px;
	gap: 64px;
	
	@media (max-width: 640px) {
		width: 343px;
		height: 36px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 643px;
		height: 60px;
		justify-content: space-between;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		width: 900px;
		height: 60px;
		gap: 20px;
		justify-content: space-between;
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		width: 1160px;
		height: 65px;
		justify-content: space-between;
	}
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
	
	@media (max-width: 640px) {
		display: none;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		display: none;
	}
`
const Menu = styled.div`
	width: 177px;
	height: 33px;
	display: none;
	
	@media (max-width: 640px) {
		display: block;
		display: flex;
		justify-content: end;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		display: block;
		display: flex;
		justify-content: end;
	}
`
const Links = styled.div`
	display: flex;
	align-items: end;
	justify-content: start;
	width: 876px;
	height: 24px;
	gap: 32px;
	padding-bottom: 8px;
	
	@media (max-width: 640px) {
		display: none;
	}
	
	@media (min-width: 641px) and (max-width: 768px) {
		display: none;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		gap: 20px;
		width: 500px;
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		gap: 20px;
		width: 500px;
	}
`
const StyledLink = styled(Link)`
	text-decoration: none;
	color: #FFF;
	
	&:hover {
		color: #1A56DB;
	}
`
const LinkItem = styled.div`
	padding: 4px;
	
	&.active {
		border: 1px solid #1A56DB;
		border-radius: 5px;
	}
`

function Navbar () {
	const { pathname } = useLocation();
	
	return(
		<NavbarContainer>
			<NavbarContent>
				<Logo>
					<Svg><image xlinkHref={Logotyp}  alt="Logo Firmy"/></Svg>
					Logo
				</Logo>
				<Links>
					<LinkItem className={pathname === "/home" && "active"}>
						<StyledLink to="/home">HOME</StyledLink>
					</LinkItem>
					<LinkItem className={pathname === "/news" && "active"}>
						<StyledLink to="/news">NEWS</StyledLink>
					</LinkItem>
					<LinkItem className={pathname === "/events" && "active"}>
						<StyledLink to="/events">EVENTS</StyledLink>
					</LinkItem>
					<LinkItem className={pathname === "/contact" && "active"}>
						<StyledLink to="/contact">CONTACT</StyledLink>
					</LinkItem>
					<LinkItem className={pathname === "/home" && "active"}>
						<StyledLink to="/home">RICK & MORTY</StyledLink>
					</LinkItem>
				</Links>
				<LogIn>Log In<Button description="Get Started"/></LogIn>
				<Menu><Button 
						iconLeft={menu}
						backgroundColor="transparent"
						width="32px"
						height="32px"
						marginRight="0px"
						marginLeft="0px"/>
				</Menu>
			</NavbarContent>
		</NavbarContainer>
	)
}
export default Navbar;