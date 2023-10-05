import styled from 'styled-components'

import Title from '../reusableComponents/Title'
import TextSupporting from '../reusableComponents/TextSupporting'
import Button from '../reusableComponents/Button'

import arrowRightBlue from '../assets/arrowRightBlue.png'
import image from '../assets/foto/mockup4.png'

const Container = styled.div`
	width: 1440px;
	height: 1017px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1F2A37;
	border-top: 1px solid #374151;
	border-bottom: 1px solid #374151;
`
const Content = styled.div`
	width: 1280px;
	height: 825px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #1F2A37;
`
const Haeding = styled.div`
	width: 576px;
	height: 121px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`
const Row = styled.div`
	width: 1280px;
	height: 640px;
	display: flex;
	justify-content: space-between;
`
const Column = styled.div`
	width: 383px;
	height: 616px;
	display: flex;
	flex-direction: column;
	gap: 32px;
`
const Separator = styled.div`
	width: 1px;
	height: 640px;
	background-color: #374151;
`
const Image = styled.img`
	width: 383px;
	height: 192px;
	border-radius: 8px;
`
const BlogCard = styled.div`
	width: 383px;
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 16px;
`
const Blog = () => {
	return (
		<Container>
			<Content>
				<Haeding>
					<Title 
							text="Latest news & events"
							fontSize="36px"
							fontWeight="800"
							lineHeight="45px"
							width="576px"
							height="auto"
							textAlign="center"/>
					<TextSupporting 
							text="We use an agile approach to test assumptions and connect with the needs of your audience early and often."
							fontSize="20px"
							fontWeight="400"
							lineHeight="30px"
							width="576px"
							height="auto"
							color="#9CA3AF"
							textAlign="center"/>
				</Haeding>
				<Row>
					<Column>
						<Image src={image} alt="mountain trail" />
						<BlogCard>
							<Title 
								text="SEO Basics: Beginner's Guide to SEO Success"
								fontSize="24px"
								fontWeight="700"
								lineHeight="30px"
								width="383px"
								height="auto"/>
							<TextSupporting 
								text="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers."
								fontSize="16px"
								fontWeight="400"
								lineHeight="24px"
								width="383px"
								height="auto"
								color="#9CA3AF"/>
							<Button 
								description="Read more"
								backgroundColor="transparent"
								width="125px"
								height="20px"
								iconRight={arrowRightBlue}
								fontWeight="600"
								fontSize="16px"
								lineHeight="20px"
								color="#2F83F8"
								justifyContent="left"
								marginRight="0px"
								/>
						</BlogCard>
					</Column>
					<Separator></Separator>
					<Column>
						<BlogCard>
							<Title 
								text="How to quickly deploy a static website"
								fontSize="24px"
								fontWeight="700"
								lineHeight="30px"
								width="383px"
								height="auto"/>
							<TextSupporting 
								text="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers."
								fontSize="16px"
								fontWeight="400"
								lineHeight="24px"
								width="383px"
								height="auto"
								color="#9CA3AF"/>
							<Button 
								description="Read more"
								backgroundColor="transparent"
								width="125px"
								height="20px"
								iconRight={arrowRightBlue}
								fontWeight="600"
								fontSize="16px"
								lineHeight="20px"
								color="#2F83F8"
								justifyContent="left"
								marginRight="0px"
								/>
						</BlogCard>
						<BlogCard>
							<Title 
								text="What is SEO? Search Engine Optimization Explained"
								fontSize="24px"
								fontWeight="700"
								lineHeight="30px"
								width="383px"
								height="auto"/>
							<TextSupporting 
								text="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even."
								fontSize="16px"
								fontWeight="400"
								lineHeight="24px"
								width="383px"
								height="auto"
								color="#9CA3AF"/>
							<Button 
								description="Read more"
								backgroundColor="transparent"
								width="125px"
								height="20px"
								iconRight={arrowRightBlue}
								fontWeight="600"
								fontSize="16px"
								lineHeight="20px"
								color="#2F83F8"
								justifyContent="left"
								marginRight="0px"
								/>
						</BlogCard>
						<BlogCard>
							<Title 
								text="Spotify's Car Thing available to all premium users"
								fontSize="24px"
								fontWeight="700"
								lineHeight="30px"
								width="383px"
								height="auto"/>
							<TextSupporting 
								text="Starting Tuesday any Spotify Premium user can buy the streaming service's first piece of hardware."
								fontSize="16px"
								fontWeight="400"
								lineHeight="24px"
								width="383px"
								height="auto"
								color="#9CA3AF"/>
							<Button 
								description="Read more"
								backgroundColor="transparent"
								width="125px"
								height="20px"
								iconRight={arrowRightBlue}
								fontWeight="600"
								fontSize="16px"
								lineHeight="20px"
								color="#2F83F8"
								justifyContent="left"
								marginRight="0px"
								/>
						</BlogCard>
					</Column>
					<Separator></Separator>
					<Column>
						<BlogCard>
							<Title 
								text="How to Rank Higher on Google (6 Easy Steps)"
								fontSize="24px"
								fontWeight="700"
								lineHeight="30px"
								width="383px"
								height="auto"/>
							<TextSupporting 
								text="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers."
								fontSize="16px"
								fontWeight="400"
								lineHeight="24px"
								width="383px"
								height="auto"
								color="#9CA3AF"/>
							<Button 
								description="Read more"
								backgroundColor="transparent"
								width="125px"
								height="20px"
								iconRight={arrowRightBlue}
								fontWeight="600"
								fontSize="16px"
								lineHeight="20px"
								color="#2F83F8"
								justifyContent="left"
								marginRight="0px"
								/>
						</BlogCard>
						<BlogCard>
							<Title 
								text="12 SEO Best Practices That Everyone Should Follow"
								fontSize="24px"
								fontWeight="700"
								lineHeight="30px"
								width="383px"
								height="auto"/>
							<TextSupporting 
								text="Static websites are now used to bootstrap lots of websites and are becoming the basis."
								fontSize="16px"
								fontWeight="400"
								lineHeight="24px"
								width="383px"
								height="auto"
								color="#9CA3AF"/>
							<Button 
								description="Read more"
								backgroundColor="transparent"
								width="125px"
								height="20px"
								iconRight={arrowRightBlue}
								fontWeight="600"
								fontSize="16px"
								lineHeight="20px"
								color="#2F83F8"
								justifyContent="left"
								marginRight="0px"
								/>
						</BlogCard>
						<BlogCard>
							<Title 
								text="How to schedule your Tweets to send later"
								fontSize="24px"
								fontWeight="700"
								lineHeight="30px"
								width="383px"
								height="auto"/>
							<TextSupporting 
								text="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even."
								fontSize="16px"
								fontWeight="400"
								lineHeight="24px"
								width="383px"
								height="auto"
								color="#9CA3AF"/>
							<Button 
								description="Read more"
								backgroundColor="transparent"
								width="125px"
								height="20px"
								iconRight={arrowRightBlue}
								fontWeight="600"
								fontSize="16px"
								lineHeight="20px"
								color="#2F83F8"
								justifyContent="left"
								marginRight="0px"
								/>
						</BlogCard>	
					</Column>
				</Row>
			</Content>
		</Container>
	);
}
export default Blog;