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
`
const Content = styled.div`
	width: 1280px;
	height: 663px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`
const Heading = styled.div`
	width: 672px;
	height: 121px;
	gap: 16px;
	display: flex;
	flex-direction: column;
`
const Form = styled.div`
	width: 640px;
	height: 478px;
`
const Contact = () => {
	return (
		<Container>
			<Content>
				<Heading>
					<Title 
						width="672px"
						height="45px"
						text="Contact us"
						fontSize="36px"
						lineHeight="45px"
						textAlign="center"
						/>
					<TextSupporting 
						width="672px"
						height="60px"
						text="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."
						fontSize="20px"
						lineHeight="30px"
						textAlign="center"
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