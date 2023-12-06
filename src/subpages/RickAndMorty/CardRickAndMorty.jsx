import styled from "styled-components";

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 300px;
height: 400px;
padding: 20px;
background: #ddd;
img{
    max-width: 200px;
}
`

const CardRickAndMorty = ({item, category}) => {
    const { name , image, episode, air_date, created, dimension, type, gender, status } = item;
    return (
        <Box>
            <div>{name}</div>
            {category === "characters" && (
                <div>
                    <img src={image} alt={name} />
                    <div>{gender}</div>
                    <div>{status}</div>
                </div>)}
            {category === "episodes" && (
                <div>
                    <div>{created}</div>
                    <div>{episode}</div>
                    <div>{air_date}</div>
                </div>)}
            {category === "locations" && (
                <div>
                    <div>{created}</div>
                    <div>{dimension}</div>
                    <div>{type}</div>
                </div>
            )}
        </Box>
    )
}
export default CardRickAndMorty;