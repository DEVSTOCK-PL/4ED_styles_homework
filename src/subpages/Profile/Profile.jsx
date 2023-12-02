// import { Link } from 'react-router-dom'

import styled from "styled-components";

import { Book } from "../../image/indexImage";

const Container = styled.div`
width: auto;
height: auto;
`
const ContactCantainer = styled.div`
width: 100%;
min-width: 1440px;
height: 337px;
background: #111928;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const FeaturesContainer = styled(ContactCantainer)`
height: 1061px;
`
const ContainerTitle = styled.div`
width: 672px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 0px;
`
const ContainerText = styled(ContainerTitle)`
width: 962px;
height: 90px;
`
const TitleContactContainer = styled.div`
width: 100%;
min-width: 1280px;
height: 45px;
font-size: 36px;
font-weight: 800;
line-height: 45px;
color: #FFF;
display: flex;
justify-content: center;
align-items: center;
`
const PreviewContactContainer = styled(TitleContactContainer)`
height: 90px;
`
const FeaturesTitle = styled.div`
width: 1280px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0px;
`
const LibraryContainer = styled(FeaturesTitle)`
height: 792px;
flex-wrap: wrap;
`
const BookCard = styled.div`
width: 400px;
height: 380px;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
`
const ImageBook = styled.image`
width: 150px;
height: 150px;
`
const ContentBook = styled(BookCard)`
height: 210px;
`
const TitleBook = styled.div`
width: 400px;
height: 25px;
font-size: 20px;
font-weight: 700;
line-height: 25px;
color: #FFF;
display: flex;
justify-content: center;
align-items: center;
`
const AuthorBook = styled(TitleBook)`
`

const DescriptionBook = styled(TitleBook)`
height: 144px;
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #9CA3AF;
`


const ProfileCard = () => {
    return (
        <Container>
            <ContactCantainer>
                <ContainerTitle>
                    <TitleContactContainer>Witaj user!{/* ${user} */}</TitleContactContainer>
                </ContainerTitle>
                <ContainerText>
                    <PreviewContactContainer>jesteś aktualnie zalogowany jako Imię Nazwisko, a Twój mail to {/* ${email} */}example@gmail.com</PreviewContactContainer>
                </ContainerText>
            </ContactCantainer>
            <FeaturesContainer>
                <FeaturesTitle>
                    <TitleContactContainer>Lista e-booków w Twojej biblioteczce!</TitleContactContainer>
                </FeaturesTitle>
                <LibraryContainer>
                    <BookCard>
                        <ImageBook><img src={Book}/></ImageBook>
                        <ContentBook>
                            <TitleBook></TitleBook>
                            <DescriptionBook></DescriptionBook>
                            <AuthorBook></AuthorBook>
                        </ContentBook>
                    </BookCard>
                    <BookCard>
                        <ImageBook><img src={Book}/></ImageBook>
                        <ContentBook>
                            <TitleBook></TitleBook>
                            <DescriptionBook></DescriptionBook>
                            <AuthorBook></AuthorBook>
                        </ContentBook>
                    </BookCard>
                    <BookCard>
                        <ImageBook><img src={Book}/></ImageBook>
                        <ContentBook>
                            <TitleBook></TitleBook>
                            <DescriptionBook></DescriptionBook>
                            <AuthorBook></AuthorBook>
                        </ContentBook>
                    </BookCard>
                    <BookCard>
                        <ImageBook><img src={Book}/></ImageBook>
                        <ContentBook>
                            <TitleBook></TitleBook>
                            <DescriptionBook></DescriptionBook>
                            <AuthorBook></AuthorBook>
                        </ContentBook>
                    </BookCard>
                    <BookCard>
                        <ImageBook><img src={Book} /></ImageBook>
                        <ContentBook>
                            <TitleBook></TitleBook>
                            <DescriptionBook></DescriptionBook>
                            <AuthorBook></AuthorBook>
                        </ContentBook>
                    </BookCard>
                </LibraryContainer>
            </FeaturesContainer>
        </Container>    
    )
}
export default ProfileCard