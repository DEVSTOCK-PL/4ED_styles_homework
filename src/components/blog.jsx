import React from 'react'
import styled from "styled-components"

import CardHeader from '../assets/image/card-header.png'
import arrowblue from '../assets/icon/ArrowBlue.svg'

const BLOG = styled.div`
background-color: #1F2A37;
font-family: 'Inter', sans-serif;
width: 100%;
height: 1017px;
gap: 10px;
padding: 96px, 0px, 96px, 0px; 
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 640px) {
    width: 375px;
    height: 1466px;
    padding: 32px, 0px;
}
`
const Container = styled.div`
width: 100%;
height: 825px;
gap: 64px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media (max-width: 640px) {
    width: 375px;
    height: 1402px;
    padding: 0px, 16px;
    gap: 32px;
}
`
const Heading = styled.div`
width: 576px;
height: 121px;
gap: 16px;
text-align: center;

@media (max-width: 640px) {
    width: 343px;
    height: 126spx;
}


h1 {
    font-size: 36px;
    font-weight: 800;
    line-height: 45px;
    color: #fff;
    margin: 0 auto;

    @media (max-width: 640px) {
        font-size: 30px;
        line-height: 37.5px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    color: #9CA3AF;

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 24px;
    }
  }
`
const Row = styled.div`
width: 1280px;
height: 640px;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 640px) {
    .delete {
        display: none;
    }
    width: 343px;
    height: 1244px;
    flex-direction: column;
}
`
const Column = styled.div`
	width: 383px;
	height: 616px;
	display: flex;
	flex-direction: column;

    @media (max-width: 640px) {
        width: 343px;
        height: 420px;
    }
    `

const Separator = styled.div`
	width: 1px;
	height: 640px;
	background-color: #374151;

    @media (max-width: 640px) {
        display: none;
    }
    `
const BlogCard = styled.div`
width: 383px;
height: 420px;

@media (max-width: 640px) {
    width: 343px;
    height: 420px;
}

h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #fff;
}

p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #9CA3AF;
}

span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #3F83F8;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
}
`

function Blog () {
    return(
        <BLOG>
            <Container>
                <Heading>
                    <h1>Latest news & events</h1>
                    <p>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                </Heading>
                <Row>
                    <Column>
                        <img src={CardHeader} alt="CardHeader" />
                        <BlogCard>
                            <h1>SEO Basics: Beginner's Guide to SEO Success</h1>
                            <p>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                            <span>Read more <img src={arrowblue}/></span>
                        </BlogCard>
                    </Column>
                    <Separator></Separator>
                    <Column>
                        <BlogCard>
                            <h1>How to quickly deploy a static website</h1>
                            <p>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                            <span>Read more <img src={arrowblue}/></span>
                        </BlogCard>
                        <BlogCard>
                            <h1>What is SEO? Search Engine Optimization Explained</h1>
                            <p>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.</p>
                            <span>Read more <img src={arrowblue}/></span>
                        </BlogCard>
                        <BlogCard className='delete'>
                            <h1>Spotify's Car Thing available to all premium users</h1>
                            <p>Starting Tuesday any Spotify Premium user can buy the streaming service's first piece of hardware.</p>
                            <span>Read more <img src={arrowblue}/></span>
                        </BlogCard>
                    </Column>
                    <Separator></Separator>
                    <Column>
                        <BlogCard>
                            <h1>How to Rank Higher on Google (6 Easy Steps)</h1>
                            <p>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                            <span>Read more <img src={arrowblue}/></span>
                        </BlogCard>
                        <BlogCard>
                            <h1>12 SEO Best Practises That Everyone Should Follow</h1>
                            <p>Static websites are now used to bootstrap lots of websites and are becoming the basis. </p>
                            <span>Read more <img src={arrowblue}/></span>
                        </BlogCard>
                        <BlogCard className='delete'>
                            <h1>How to schedule your Tweets to send later</h1>
                            <p>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even</p>
                            <span>Read more <img src={arrowblue}/></span>
                        </BlogCard>
                    </Column>
                </Row>
            </Container>
        </BLOG>
    )
}

// function Blog() {
//     const blogPosts = [
//         {
//             title: "SEO Basics: Beginner's Guide to SEO Success",
//             content: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
//             className: "",
//             readMoreText: "Read more",
//         },
//         {
//             title: "How to quickly deploy a static website",
//             content: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
//             className: "",
//             readMoreText: "Read more",
//         },
//         {
//             title: "What is SEO? Search Engine Optimization Explained",
//             content: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.",
//             className: "",
//             readMoreText: "Read more",
//         },
//         {
//             title: "Spotify's Car Thing available to all premium users",
//             content: "Starting Tuesday any Spotify Premium user can buy the streaming service's first piece of hardware.",
//             className: "delete",
//             readMoreText: "Read more",
//         },
//         {
//             title: "How to Rank Higher on Google (6 Easy Steps)",
//             content: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
//             className: "",
//             readMoreText: "Read more",
//         },
//         {
//             title: "12 SEO Best Practises That Everyone Should Follow",
//             content: "Static websites are now used to bootstrap lots of websites and are becoming the basis.",
//             className: "",
//             readMoreText: "Read more",
//         },
//         {
//             title: "How to schedule your Tweets to send later",
//             content: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even",
//             className: "delete",
//             readMoreText: "Read more",
//         },
//     ];

//     return (
//         <BLOG>
//             <Container>
//                 <Heading>
//                     <h1>Latest news & events</h1>
//                     <p>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
//                 </Heading>
//                 <Row>
//                     {blogPosts.map((post, index) => (
//                         <Column key={index}>
//                             <BlogCard className={post.className}>
//                                 <h1>{post.title}</h1>
//                                 <p>{post.content}</p>
//                                 <span>{post.readMoreText} <img src={arrowblue}/></span>
//                             </BlogCard>
//                         </Column>
//                     ))}
//                 </Row>
//             </Container>
//         </BLOG>
//     );
// }

export default Blog;
