import styled from "styled-components";
import NavbarRegister from "../Register/NavbarRegister";
import CtaTwo from "../../components/CTA_2";
import SectorBlog from "../../components/Blog";
import Footer from "../../components/Footer";


const EventsClickStyled = styled.div`
width: 1440px;
height: 3230px;
display: flex;
flex-direction: column;
`

const EventsClick = () => {
    return (
        <EventsClickStyled>
            <NavbarRegister />
            <CtaTwo />
            <SectorBlog />
            <Footer />
        </EventsClickStyled>

    )
}

export default EventsClick