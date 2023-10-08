import styled from 'styled-components'

import Title from '../reusableComponents/Title'
import TextSupporting from '../reusableComponents/TextSupporting'
import ContactForm from '../contact/ContactForm'

const Container = styled.div`
	width: 1440px;
	height: 855px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #111928;
	
	@media( max-width: 640px) {
		width: 375px;
		height: auto;
		padding-top: 30px;
	}
`
const Content = styled.div`
	width: 1280px;
	height: 663px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
	}
`
const Heading = styled.div`
	width: 672px;
	height: 121px;
	gap: 16px;
	display: flex;
	flex-direction: column;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
		padding-bottom: 20px;
	}
`
const Form = styled.div`
	width: 640px;
	height: 478px;
	
	@media( max-width: 640px) {
		width: 343px;
		height: auto;
	}
`
const titleProps = window.innerWidth <= 640 ? {
  	width: '343px',
} : {
  	width: '672px',
};

const textSupportingProps = window.innerWidth <= 640 ? {
  	width: '343px',
	height: 'auto',
	fontSize: '16px',
	lineHeight: '24px',
} : {
  	width: '672px',
	height: '60px',
	fontSize: '20px',
	lineHeight: '30px',
};

const Contact = () => {
	return (
		<Container>
			<Content>
				<Heading>
					<Title 
						width={titleProps.width}
						height="45px"
						text="Contact us"
						fontSize="36px"
						lineHeight="45px"
						textAlign="center"
						/>
					<TextSupporting 
						text="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."
						textAlign="center"
						width={textSupportingProps.width}
						height={textSupportingProps.height}
						fontSize={textSupportingProps.fontSize}
						lineHeight={textSupportingProps.lineHeight}
						/>
				</Heading>
				<Form>
					<ContactForm />
				</Form>
			</Content>
		</Container>
	);
}  
export default Contact;