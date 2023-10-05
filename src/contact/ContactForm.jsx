import styled from 'styled-components'
import Button from '../reusableComponents/Button'

const Form = styled.div`
	width: 640px;
	height: 478px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	background-color: #111928;
	justify-content: space-between;
`
const InputBox = styled.div`
	width: 640px;
	height: auto;
`
const Label = styled.div`
	width: 640px;
	height: 21px;
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	text-align: left;
	margin-bottom: 8px;
`

const Input = styled.input`
	height: ${ (props) => props.height || '52px' };
	width: 635px;
	background-color: #374151;
	border: 1px solid #4B5563;
	border-radius: 8px;
	font-size: 16px;
	line-height: 24px;
	color: #9CA3AF;
	padding-left: 10px;
	padding-top: 4px;
	box-sizing: border-box;
	
	::placeholder {
		font-size: 16px;
		line-height: 24px;
		color: #9CA3AF;
	}
`
const Textarea = styled.textarea`
	height: 162px;
	width: 635px;
	background-color: #374151;
	border: 1px solid #4B5563;
	border-radius: 8px;
	font-size: 16px;
	line-height: 24px;
	color: #9CA3AF;
	padding-left: 10px;
	padding-top: 4px;
	box-sizing: border-box;
`
const ContactForm = () => {
	return (
		<Form>
			<InputBox>
				<Label>Your email</Label>
				<Input
					type="text"
					placeholder="name@flowbite.com">
				</Input>
			</InputBox>
			<InputBox>
				<Label>Subject</Label>
				<Input
					type="text"
					placeholder="Let as know we can help you">
				</Input>
			</InputBox>
			<InputBox>
				<Label>Your message</Label>
				<Textarea
					rows="6"
					cols="20">
				</Textarea>
			</InputBox>
			<Button 
				description="Send message"
				width="139px"
				backgroundColor="#1C63F2"
				lineHeight="21px"/>
		</Form>
	);
}
export default ContactForm;