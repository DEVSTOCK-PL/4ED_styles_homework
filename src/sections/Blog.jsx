import styled from "styled-components";

import image from "../assets/foto/mockup4.png";
import { ArrowRightBlue } from "../assets/svg_components";

const text1 = "Latest news & events";
const text2 =
  "We use an agile approach to test assumptions and connect with the needs of your audience early and often.";
const text3 = "SEO Basics: Beginner's Guide to SEO Success";
const text4 =
  "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.";
const text5 = "How to quickly deploy a static website";
const text6 =
  "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.";
const text7 = "What is SEO? Search Engine Optimization Explained";
const text8 =
  "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.";
const text9 = "Spotify's Car Thing available to all premium users";
const text10 =
  "Starting Tuesday any Spotify Premium user can buy the streaming service's first piece of hardware.";
const text11 = "How to Rank Higher on Google (6 Easy Steps)";
const text12 =
  "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.";
const text13 = "12 SEO Best Practices That Everyone Should Follow";
const text14 =
  "Static websites are now used to bootstrap lots of websites and are becoming the basis.";
const text15 = "How to schedule your Tweets to send later";
const text16 =
  "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #1f2a37; */
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;
  padding-bottom: 90px;
  padding-top: 90px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
`;

const Content = styled.div`
  width: 89%;
  max-width: 1280px;
  height: 825px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: #1f2a37; */

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
    height: auto;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
    height: auto;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    height: auto;
    margin-top: 20px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    margin-top: 20px;
  }
`;

const Haeding = styled.div`
  width: 576px;
  height: 121px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 30px;

  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
  }
`;

const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1025px) and (max-width: 1280px) {
    padding-top: 30px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    padding-top: 30px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 90%;
  height: 616px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 330px;
    height: auto;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 250px;
    height: auto;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    gap: 0px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    gap: 0px;
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 640px;
  background-color: #374151;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: auto;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    display: none;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 90%;
  height: auto;
  border-radius: 8px;

  @media (min-width: 641px) and (max-width: 768px) {
    padding-bottom: 20px;
  }
  @media (max-width: 640px) {
    padding-bottom: 20px;
  }
`;

const BlogCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: auto;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 343px;
    height: auto;
    padding-bottom: 20px;
  }
  @media (max-width: 640px) {
    width: 343px;
    height: auto;
    padding-bottom: 20px;
  }
`;

const Title1 = styled.p`
  width: 100%;
  height: auto;
  font-size: 36px;
  line-height: 45px;
  font-weight: 800;
  margin: 0;

  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 30px;
    line-height: 37px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 37px;
    min-width: 350px;
  }
`;

const Title2 = styled.p`
  width: 90%;
  height: auto;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  margin: 0;
  text-align: left;

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    width: 303px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 30px;
    width: 303px;
  }
`;

const TextSupporting1 = styled.p`
  width: 100%;
  height: auto;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  margin: 0;
  color: #9ca3af;

  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const TextSupporting2 = styled.p`
  width: 90%;
  height: auto;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin: 0;
  color: #9ca3af;
  text-align: left;

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 303px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    width: 303px;
  }
`;

const TransparentButton = styled.button`
  width: 125px;
  height: 20px;
  border-radius: 8px;
  color: #1c64f2;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: none;
  gap: 8px;
  margin-left: 0;
  padding-left: 0;

  &:active {
    color: #fff;
  }
`;

const Blog = () => {
  return (
    <Container>
      <Content>
        <Haeding>
          <Title1>{text1}</Title1>
          <TextSupporting1>{text2}</TextSupporting1>
        </Haeding>
        <Row>
          <Column>
            <Image src={image} alt="mountain trail" />
            <BlogCard>
              <Title2>{text3}</Title2>
              <TextSupporting2>{text4}</TextSupporting2>
              <TransparentButton>
                Read more <ArrowRightBlue />
              </TransparentButton>
            </BlogCard>
          </Column>
          <Separator></Separator>
          <Column>
            <BlogCard>
              <Title2>{text5}</Title2>
              <TextSupporting2>{text6}</TextSupporting2>
              <TransparentButton>
                Read more <ArrowRightBlue />
              </TransparentButton>
            </BlogCard>
            <BlogCard>
              <Title2>{text7}</Title2>
              <TextSupporting2>{text8}</TextSupporting2>
              <TransparentButton>
                Read more <ArrowRightBlue />
              </TransparentButton>
            </BlogCard>
            <BlogCard>
              <Title2>{text9}</Title2>
              <TextSupporting2>{text10}</TextSupporting2>
              <TransparentButton>
                Read more <ArrowRightBlue />
              </TransparentButton>
            </BlogCard>
          </Column>
          <Separator></Separator>
          <Column>
            <BlogCard>
              <Title2>{text11}</Title2>
              <TextSupporting2>{text12}</TextSupporting2>
              <TransparentButton>
                Read more <ArrowRightBlue />
              </TransparentButton>
            </BlogCard>
            <BlogCard>
              <Title2>{text13}</Title2>
              <TextSupporting2>{text14}</TextSupporting2>
              <TransparentButton>
                Read more <ArrowRightBlue />
              </TransparentButton>
            </BlogCard>
            <BlogCard>
              <Title2>{text15}</Title2>
              <TextSupporting2>{text16}</TextSupporting2>
              <TransparentButton>
                Read more <ArrowRightBlue />
              </TransparentButton>
            </BlogCard>
          </Column>
        </Row>
      </Content>
    </Container>
  );
};
export default Blog;
