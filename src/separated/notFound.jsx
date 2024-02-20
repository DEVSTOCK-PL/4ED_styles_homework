import styled from "styled-components";

const Error = styled.div`
width: 100%;
height: 200px;
justify-content: center;
display: flex;
align-items: center;
`

const H1 = styled.h1`
color: #fff;
size: 32px;
`

function NotFound () {
    return (
        <Error><H1>BŁĄD! Przepraszamy za utrudnienia.</H1></Error>
    )
}

export default NotFound