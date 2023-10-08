import styled from 'styled-components'
import Title from '../reusableComponents/Title'
import TextSupporting from '../reusableComponents/TextSupporting'

const Container = styled.div`
	width: 1440px;
	height: 213px;
	background-color: #111928;
	display: flex;
	justify-content: center;
	
	@media( max-width: 640px) {
		width: 375px;
		height: 360px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 675px;
		height: 360px;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		width: 980px;
		height: 180px;
	}
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
	
	@media( max-width: 640px) {
		width: 343px;
		height: 328px;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 10px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 343px;
		height: 328px;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 10px;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		width: 900px;
		height: 117px;
	}
`
const Stat = styled.div`
	width: 248px;
	height: 69px;
	border-right: 1px solid #374151;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	
	@media( max-width: 640px) {
		width: 311px;
		height: 62px;
		flex-direction: column;
		border-right: none;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 311px;
		height: 62px;
		flex-direction: column;
		border-right: none;
	}
`
const StatEnd = styled.div`
	width: 248px;
	height: 69px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	
	@media( max-width: 640px) {
		width: 311px;
		height: 62px;
		flex-direction: column;
		border-right: none;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 311px;
		height: 62px;
		flex-direction: column;
		border-right: none;
	}
`

const titleProps = window.innerWidth <= 768 ? {
  	fontSize: '30px', 
  	lineHeight: '37.5px', 
  	width: '311px',
  	height: '38px',
	textAlign: 'center',
} : {
  	fontSize: '36px',
  	lineHeight: '45px',
	width: "248",
	height: "45px",
};

const SocialProof = () => {
	return (
		<Container>
			<Row>
				<Stat>
					<Title 
						text="104M"
						fontSize={titleProps.fontSize}
  						lineHeight={titleProps.lineHeight}
						width={titleProps.width}
						height={titleProps.height}
						textAlign={titleProps.textAlign}/>
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
						fontSize={titleProps.fontSize}
  						lineHeight={titleProps.lineHeight}
						width={titleProps.width}
						height={titleProps.height}
						textAlign={titleProps.textAlign}/>
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
						fontSize={titleProps.fontSize}
  						lineHeight={titleProps.lineHeight}
						width={titleProps.width}
						height={titleProps.height}
						textAlign={titleProps.textAlign}/>
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
						fontSize={titleProps.fontSize}
  						lineHeight={titleProps.lineHeight}
						width={titleProps.width}
						height={titleProps.height}
						textAlign={titleProps.textAlign}/>
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