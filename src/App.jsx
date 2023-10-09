import styled from "styled-components";
import NavbarComponent from "./components/Navbar/Navbar";
import HeroComponent from "./components/Hero/Hero";
import SocialProofComponent from "./components/SocialProof/SocialProof";
import CTA1Component from "./components/CTA1/CTA1";
import CustomerLogosComponent from "./components/CustomerLogos/CustomerLogos";
import CTA2Component from "./components/CTA2/CTA2";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import * as brandLogos from "./assets/brandLogos/brandLogos";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #111928;
  gap: 96px;
  margin-bottom: 64px;
`;

function App() {
  const projectData = {
    navbar: {
      logo: "../images/img_logo.png",
      navLinks: ["Company", "Marketplace", "Features", "Team", "Contact"],
      cta: "Get Started",
    },
    hero: {
      title: "Making earth cooler for people, nature, climate",
      text: "Protecting the planet and its natural resources for future generations, by reducing pollution, promoting sustainability, and conserving energy and resources.",
      buttonText: ["Donate now", "Learn more"],
      sponsors: [
        brandLogos.Intel,
        brandLogos.Fedex,
        brandLogos.Visa,
        brandLogos.Disney,
      ],
      carousel: "../images/img_carousel.png",
    },
    socialProof: [
      {
        heading: "104M",
        supportingText: "Trees planted",
      },
      {
        heading: "20k+",
        supportingText: "Partners & Donors",
      },
      {
        heading: "90M",
        supportingText: "Tonnes of Carbon Stored",
      },
      {
        heading: "50+",
        supportingText: "People-Powered Projects",
      },
    ],
    cta1: [
      {
        image: "../images/img_mockup.png",
        rightContent: {
          heading:
            "Flowbite Green is a climate change non-profit organization.",
          supportingText:
            "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
          buttonText: [
            {
              text: "Get involved",
              version: "primary",
              rightIcon: "../icons/icon_arrowright.svg",
            },
            { text: "Learn more", version: "secondary" },
          ],
        },
      },
      {
        image: "../images/img_mockup_406x540.png",
        rightContent: {
          heading: "Protect our earth against climate change and pollution.",
          supportingText:
            "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
          buttonText: [
            {
              text: "View all activities",
              version: "primary",
              rightIcon: "../icons/icon_arrowright.svg",
            },
          ],
        },
      },
      {
        image: "../images/img_mockup_1.png",
        rightContent: {
          heading: "Together we can restore our earth against climate change",
          supportingText:
            "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
          buttonText: [
            {
              text: "Read more",
              version: "primary",
              rightIcon: "../icons/icon_arrowright.svg",
            },
          ],
        },
      },
    ],
    customerLogos: {
      heading: "Donors, Partners & Sponsors",
      supportText:
        "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value.",
      sponsorLinkText: "Become a sponsor",
      partnerSince: "Partner since 2015",
      buttonText: "Visit website",
      sponsors: [
        brandLogos.Stripe,
        brandLogos.Spotify,
        brandLogos.Tesla,
        brandLogos.Twitch,
        brandLogos.Intel,
        brandLogos.Shell,
        brandLogos.Netflix,
        brandLogos.Nestle,
        brandLogos.Fedex,
        brandLogos.Disney,
        brandLogos.BMW,
        brandLogos.Cocacola,
      ],
    },
    cta2: {
      heading: "Fundraising events",
      supportText:
        "Flowbite helps you connect with friends, family and communities of people who share your interests. ",
      cards: [
        {
          image: "/images/img_mockup_288x552.png",
          goal: {
            current: 376856,
            total: 400000,
            goals: 2756,
          },
          heading: "Thank you for supporting in planting trees work. ",
          supportText:
            "Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.",
          buttons: [{ text: "Donate now" }, { text: "Share this Fundraiser" }],
        },
        {
          image: "/images/img_mockup_2.png",
          goal: {
            current: 75856,
            total: 150000,
            goals: 568,
          },
          heading: "Thank you for supporting our lifesaving work.",
          supportText:
            "Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.",
          buttons: [{ text: "Donate now" }, { text: "Share this Fundraiser" }],
        },
      ],
    },
    blog: {
      heading: "Latest news & events",
      supportText:
        "We use an agile approach to test assumptions and connect with the needs of your audience early and often.",
      columns: [
        [
          {
            image: "/images/img_cardheader.png",
            title: "SEO Basics: Beginner's Guide to SEO Success",
            preview:
              "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
            link: "#",
          },
        ],
        [
          {
            title: "How to quickly deploy a static website",
            preview:
              "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
            link: "#",
          },
          {
            title: "What is SEO? Search Engine Optimization Explained",
            preview:
              "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.",
            link: "#",
          },
          {
            title: "Spotify's Car Thing available to all premium users",
            preview:
              "Starting Tuesday any Spotify Premium user can buy the streaming service's first piece of hardware.",
            link: "#",
          },
        ],
        [
          {
            title: "How to Rank Higher on Google (6 Easy Steps)",
            preview:
              "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
            link: "#",
          },
          {
            title: "12 SEO Best Practices That Everyone Should Follow",
            preview:
              "Static websites are now used to bootstrap lots of websites and are becoming the basis.",
            link: "#",
          },
          {
            title: "How to schedule your Tweets to send later",
            preview:
              "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.",
            link: "#",
          },
        ],
      ],
    },
    footer: [
      {
        heading: "COMPANY",
        links: ["About", "Premium", "Blog", "Affiliate Program", "Get Coupon"],
      },
      {
        heading: "HELP AND SUPPORT",
        links: [
          "Contact Us",
          "Knowledge Center",
          "Premium Support",
          "Sponsorships",
        ],
      },
      {
        heading: "LEARNING",
        links: ["Learn Hub", "Manuals", "Tutorials", "Communities"],
      },
      {
        heading: "RESOURCES",
        links: [
          "Third-Party Tools",
          "Illustrations",
          "Themesberg",
          "Bluehost",
          "Stock Photos",
        ],
      },
      {
        heading: "LEGAL",
        links: ["Privacy Policy", "Terms & Conditions", "EULA"],
      },
    ],
  };

  const { logo, navLinks, cta } = projectData.navbar;

  return (
    <Container>
      <NavbarComponent
        logoProps={{ logoSvg: logo, logoText: "Logo" }}
        links={navLinks}
        ctaProps={{ loginText: cta, buttonProps: "primary" }}
      />
      <HeroComponent {...projectData.hero} />
      <SocialProofComponent socialProof={projectData.socialProof} />
      <CTA1Component cta1={projectData.cta1} />
      <CustomerLogosComponent customerLogos={projectData.customerLogos} />
      <CTA2Component cta2={projectData.cta2} />
      <Blog blogData={projectData.blog} />
      <Contact />
      <Footer footerData={projectData.footer} />
    </Container>
  );
}

export default App;
