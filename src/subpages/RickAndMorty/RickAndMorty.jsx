import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom'
import { breakpoints } from "../../components/breakpoints";
import useLogic from "../../Hooks/useLogic";
import CardRickAndMorty from "./CardRickAndMorty";

const RickStyled = styled.div`
width: 100%;
${'' /* min-width: 1440px;
height: 1440px; */}
background: #111928;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 20px;

@media screen and (max-width: ${breakpoints.m}){
    margin: 0 32px;
}
` 
const Nav = styled.ul`
display: flex;
flex-direction: row;
gap: 20px;
margin: 20px;
li {
    padding: 10px;
    background: #999;
}
`


const RickAndMorty = () => {
    const { pathname } = useLocation();
    console.log(pathname, "pathname")

    const category = pathname.split("/")[2]
    console.log(category)

    const { data, loading } = useLogic( category );


    return (
        <div>
            <Nav>
                <li>
                    <Link to="/fun/characters">Lista postaci</Link>
                </li>
                <li>
                    <Link to="/fun/locations">Lista lokacji</Link>
                </li>
                <li>
                    <Link to="/fun/episodes">Lista odcinków</Link>
                </li>
            </Nav>

            {loading ? (
                <div>loading</div>
            ) : (
            <RickStyled>
                        {data.map(({ id, ...rest }) => {
                            return (
                                <CardRickAndMorty key={id} item={rest} category={category} />
                            )
                        })}
                       </RickStyled>

            )}
        </div>
    )
}
export default RickAndMorty

// https://rickandmortyapi.com/