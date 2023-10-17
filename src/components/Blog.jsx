import styled from "styled-components";
import CardHeader from "../image/CardHeader.svg"
import HeadingText from "../generalComponents/HeadingText";
import SupportingText from "../generalComponents/SupportingText";
import LinkButton from "../generalComponents/LinkButton";

const StyledBlog = styled.div`
width: 1440px;
height: 1017px;
padding: 96px 0px 96px 0px;
gap: 10px;
border: 1px 0px 1px 0px;
background: #1F2A37;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ContainerBlog = styled.div`
width: 1280px;
height: 825px;
gap: 64px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const SectorDescription = styled.div`
width: 1280px;
heigh: 121px;
display: flex;
justify-content: center;
align-items: center;
`
const HeadingAndSupporting = styled.div`
width: 576px; 
height: 121px; 
gap: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const RowBlog = styled.div`
width: 1280px;
height: 640px;
gap: 32px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const Separator = styled.div`
width: 1px;
height: 640px;
background: #374151;
`
const ColumnContainerTech = styled.div`
width: 383.33px;
height: 640px;
display: flex;
flex-direction: column;
`
const ColumnOne = styled.div`
width: 383.33px;
height: 420px;
gap:32px;
display: flex;
flex-direction: column;
justify-content: 

`
const ColumnThree = styled.div`
width: 383.33px;
height: 640px;
gap: 32px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const ColumnTwo = styled.div`
width: 383.33px;
height: 616px;
gap: 32px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const CardImage = styled.svg`
width: 383.33px;
height: 192px;
`
const TextColumnOne = styled.div`
width: 383.33px;
height: 208px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const TextHeadColumnThree = styled.div`
width: 383.33px;
heigh: 208px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const TextCenterColumnThree = styled.div`
width: 383.33px;
height: 184px;
gap: 20px;
`
const TextBottomColumnThree = styled.div`
width: 383.33px;
height: 184px;
gap: 20px;
display: flex;
flex-direction: column;
justify-content: center;
`
const TextHeadColumnTwo = styled.div`
width: 383.33px;
heigh: 208px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const TextCenterColumnTwo = styled.div`
width: 383.33px;
height: 160px;
gap: 20px;
`
const TextBottomColumnTwo = styled.div`
width: 383.33px;
height: 184px;
gap: 20px;
display: flex;
flex-direction: column;
justify-content: center;
`

const SectorBlog = () => {
    return (
        <StyledBlog>
            <ContainerBlog>
                <SectorDescription>
                    <HeadingAndSupporting>
                        <HeadingText height="45px" description="Latest news & events" display="flex" justifyContent="center" alignItems="center" />
                        <SupportingText height="60px" description="We use an agile approach to test assumptions and connect with the needs of your audience early and often." display="flex" justifyContent="center" alignItems="center"/>
                    </HeadingAndSupporting>
                </SectorDescription>
                <RowBlog>
                    <ColumnContainerTech>
                        <ColumnOne>
                            <CardImage><image xlinkHref={CardHeader}/></CardImage>
                            <TextColumnOne>
                                <HeadingText width="383.33px" height="60px" fontWeight="700" fontSize="24px" lineHeight="30px" description="SEO Basics: Beginner's Guide to SEO Success" />
                                <SupportingText width="383.33px" height="96px" fontSize="16px" lineHeight="24px" description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers." />
                                <LinkButton description="Read more" display="flex" flexDirection="row" justifyContent="center"/>
                            </TextColumnOne>
                        </ColumnOne>
                    </ColumnContainerTech>
                    <Separator/>
                    <ColumnContainerTech>
                        <ColumnThree>
                            <TextHeadColumnThree>
                                <HeadingText width="383.33px" height="60px" fontWeight="700" fontSize="24px" lineHeight="30px" description="How to quickly deploy a static website" />
                                <SupportingText width="383.33px" height="96px" fontSize="16px" lineHeight="24px" description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers."/>
                                <LinkButton description="Read more" display="flex" flexDirection="row" justifyContent="center"/>
                            </TextHeadColumnThree>
                            <TextCenterColumnThree>
                                <HeadingText width="383.33px" height="60px" fontWeight="700" fontSize="24px" lineHeight="30px" description="What is SEO? Search Engine Optimization Explained"/>
                                <SupportingText width="383.33px" height="72px" fontSize="16px" lineHeight="24px" description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even."/>
                                <LinkButton description="Read more"/>
                            </TextCenterColumnThree>
                            <TextBottomColumnThree>
                                <HeadingText width="383.33px" height="60px" fontWeight="700" fontSize="24px" lineHeight="30px" description="Spotify's Car Thing available to all premium users"/>
                                <SupportingText width="383.33px" height="72px" fontSize="16px" lineHeight="24px" description="Starting Tuesday any Spotify Premium user can buy the streaming service's first piece of hardware."/>
                                <LinkButton description="Read more"/>
                            </TextBottomColumnThree>
                        </ColumnThree>
                    </ColumnContainerTech>
                    <Separator/>
                    <ColumnContainerTech>
                        <ColumnTwo>
                            <TextHeadColumnTwo>
                                <HeadingText width="383.33px" height="60px" fontWeight="700" fontSize="24px" lineHeight="30px" description="How to Rank Higher on Google (6 Easy Steps)"/>
                                <SupportingText width="383.33px" height="96px" fontSize="16px" lineHeight="24px" description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers."/>
                                <LinkButton description="Read more"/>
                            </TextHeadColumnTwo>
                            <TextCenterColumnTwo>
                                <HeadingText width="383.33px" height="60px" fontWeight="700" fontSize="24px" lineHeight="30px" description="12 SEO Best Practices That Everyone Should Follow"/>
                                <SupportingText width="383.33px" height="48px" fontSize="16px" lineHeight="24px" description="Static websites are now used to bootstrap lots of websites and are becoming the basis."/>
                                <LinkButton description="Read more"/>
                            </TextCenterColumnTwo>
                            <TextBottomColumnTwo>
                                <HeadingText width="383.33px" height="60px" fontWeight="700" fontSize="24px" lineHeight="30px" description="How to schedule your Tweets to send later"/>
                                <SupportingText width="383.33px" height="72px" fontSize="16px" lineHeight="24px" description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even."/>
                                <LinkButton description="Read more"/>
                            </TextBottomColumnTwo>
                        </ColumnTwo>
                    </ColumnContainerTech>    
                </RowBlog>
            </ContainerBlog>
        </StyledBlog>
    )
}
export default SectorBlog