import styled from "styled-components";

import { BlogCard } from "../image/indexImage";

import { HeadingText, SupportingText, LinkButton } from "../generalComponents/indexGeneralComponents";
import { breakpoints } from "./breakpoints";

const StyledBlog = styled.div`
width: 100%;
min-width: 1440px;
height: 1017px;
padding: 96px 0px 96px 0px;
gap: 10px;
border: 1px 0px 1px 0px;
background: #1F2A37;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;    

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
    margin: 0 32px;
}
`
const HeadTitle = styled(HeadingText)`
height: 45px;
display: flex; 
justify-content: center;
align-items: center;
`
const HeadText = styled(SupportingText)`
height: 60px;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerBlog = styled.div`
width: 100%;
min-width: 1280px;
height: 825px;
gap: 64px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
}
`
const SectorDescription = styled.div`
width: 100%;
max-width: 1280px;
height: 121px;
display: flex;
justify-content: center;
align-items: center;
`
const HeadingAndSupporting = styled(SectorDescription)`
width: 576px;  
gap: 16px;
flex-direction: column;
`
const RowBlog = styled.div`
width: 100%;
max-width: 1280px;
height: 640px;
gap: 32px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

@media screen and (max-width: ${breakpoints.s}) {
    height: auto;
    flex-direction: column;
}
`
const Separator = styled.div`
width: 1px;
height: 640px;
background: #374151;

@media screen and (max-width: ${breakpoints.s}) {
    display: none;
}
`
const ColumnContainerTech = styled.div`
width: 383.33px;
height: 640px;
display: flex;
flex-direction: column;

@media screen and (max-width: ${breakpoints.s}) {
    height: auto;
}
`
const ColumnOne = styled(ColumnContainerTech)`
max-height: 420px;
gap: 32px;
`
const ColumnThree = styled(ColumnContainerTech)`
gap: 32px;
justify-content: space-around;
align-items: center;
`
const ColumnTwo = styled(ColumnThree)`
height: 616px;
`
const CardImage = styled.image`
width: 383.33px;
height: 192px;
`
const TextColumnOne = styled(ColumnContainerTech)`
height: 208px;
justify-content: space-around;
`
const TextHeadColumnThree = styled(ColumnContainerTech)`
heigh: 208px;
justify-content: space-between;
`
const TextCenterColumnThree = styled(ColumnContainerTech)`
height: 184px;
gap: 20px;
`
const TextBottomColumnThree = styled(ColumnContainerTech)`
height: 184px;
gap: 20px;
justify-content: center;
`
const TextHeadColumnTwo = styled(ColumnContainerTech)`
heigh: 208px;
justify-content: space-between;
`
const TextCenterColumnTwo = styled(ColumnContainerTech)`
height: 160px;
gap: 20px;
`
const TextBottomColumnTwo = styled(ColumnContainerTech)`
height: 184px;
gap: 20px;
justify-content: center;
`
const BlogTitle = styled.div`
width: 383.33px;
height: 60px;
font-size: 24px;
font-weight: 700;
line-height: 30px;
color: #FFF;
font-family: Inter;
`
const BlogPreviev = styled.div`
width: 383.33px;
height: auto;
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #9CA3AF;
font-family: Inter;
`

const SectorBlog = () => {
    return (
        <StyledBlog>
            <ContainerBlog>
                <SectorDescription>
                    <HeadingAndSupporting>
                        <HeadTitle description="Latest news & events" />
                        <HeadText description="We use an agile approach to test assumptions and connect with the needs of your audience early and often." />
                    </HeadingAndSupporting>
                </SectorDescription>
                <RowBlog>
                    <ColumnContainerTech>
                        <ColumnOne>
                            <CardImage><img src={BlogCard} alt="Card"/></CardImage>
                            <TextColumnOne>
                                <BlogTitle>SEO Basics: Beginner's Guide to SEO Success</BlogTitle>
                                <BlogPreviev>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</BlogPreviev>
                                <LinkButton description="Read more" />
                            </TextColumnOne>
                        </ColumnOne>
                    </ColumnContainerTech>
                    <Separator/>
                    <ColumnContainerTech>
                        <ColumnThree>
                            <TextHeadColumnThree>
                                <BlogTitle>How to quickly deploy a static website</BlogTitle>
                                <BlogPreviev>tatic websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</BlogPreviev>
                                <LinkButton description="Read more" />
                            </TextHeadColumnThree>
                            <TextCenterColumnThree>
                                <BlogTitle>What is SEO? Search Engine Optimization Explained</BlogTitle>
                                <BlogPreviev>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.</BlogPreviev>
                                <LinkButton description="Read more"/>
                            </TextCenterColumnThree>
                            <TextBottomColumnThree>
                                <BlogTitle>Spotify's Car Thing available to all premium users</BlogTitle>
                                <BlogPreviev>Starting Tuesday any Spotify Premium user can buy the streaming service's first piece of hardware.</BlogPreviev>
                                <LinkButton description="Read more"/>
                            </TextBottomColumnThree>
                        </ColumnThree>
                    </ColumnContainerTech>
                    <Separator/>
                    <ColumnContainerTech>
                        <ColumnTwo>
                            <TextHeadColumnTwo>
                                <BlogTitle>How to Rank Higher on Google (6 Easy Steps)</BlogTitle>
                                <BlogPreviev>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</BlogPreviev>
                                <LinkButton description="Read more"/>
                            </TextHeadColumnTwo>
                            <TextCenterColumnTwo>
                                <BlogTitle>12 SEO Best Practices That Everyone Should Follow</BlogTitle>
                                <BlogPreviev>Static websites are now used to bootstrap lots of websites and are becoming the basis.</BlogPreviev>
                                <LinkButton description="Read more"/>
                            </TextCenterColumnTwo>
                            <TextBottomColumnTwo>
                                <BlogTitle>How to schedule your Tweets to send later</BlogTitle>
                                <BlogPreviev>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.</BlogPreviev>                        
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