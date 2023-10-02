import styled from 'styled-components'
import Title from '../reusableComponents/Title'
import TextSupporting from '../reusableComponents/TextSupporting'

const Container = styled.div`
	width: 1440px;
	height: 213px;
	background-color: #111928;
	display: flex;
	justify-content: center;
`
const Row = styled.div`
	width: 1024px;
	height: 117px;
	background-color: #1F2A37;
	border: 1px solid #374151;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Stat = styled.div`
	width: 248px;
	height: 69px;
	border-right: 1px solid #374151;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`
const StatEnd = styled.div`
	width: 248px;
	height: 69px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`
const SocialProof = () => {
	return (
		<Container>
			<Row>
				<Stat>
					<Title 
						text="104M"
						lineHeight="45px"
						fontSize="36px"
						width="248"
						height="45px"/>
					<TextSupporting 
						text="Trees planted"
						lineHeight="24px"
						fontSize="16px"
						color="#9CA3AF"
						height="24px"
						width="248"
						textAlign="center"/>
				</Stat>
				<Stat>
					<Title 
						text="20k+"
						lineHeight="45px"
						fontSize="36px"
						width="248"
						height="45px"/>
					<TextSupporting 
						text="Partners & Donors"
						lineHeight="24px"
						fontSize="16px"
						color="#9CA3AF"
						height="24px"
						width="248"
						textAlign="center"/>
				</Stat>
				<Stat>
					<Title 
						text="90M"
						lineHeight="45px"
						fontSize="36px"
						width="248"
						height="45px"/>
					<TextSupporting 
						text="Tonnes of Carbon Stored"
						lineHeight="24px"
						fontSize="16px"
						color="#9CA3AF"
						height="24px"
						width="248"
						textAlign="center"/>
				</Stat>
				<StatEnd>
					<Title 
						text="50+"
						lineHeight="45px"
						fontSize="36px"
						width="248"
						height="45px"/>
					<TextSupporting 
						text="People-Powered Projects"
						lineHeight="24px"
						fontSize="16px"
						color="#9CA3AF"
						height="24px"
						width="248"
						textAlign="center"/>
				</StatEnd>
			</Row>
		</Container>
	);
}
export default SocialProof;