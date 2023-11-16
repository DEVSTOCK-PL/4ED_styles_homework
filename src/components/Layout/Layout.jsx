import { NavbarComponent, Footer } from "../index";

const projectData = {
  navbar: {
    logo: "../images/img_logo.png",
    navLinks: [
      { label: "HOME", path: "HOME" },
      { label: "NEWS", path: "NEWS" },
      { label: "EVENTS", path: "EVENTS" },
      { label: "CONTACT", path: "CONTACT" },
      { label: "RICK_AND_MORTY", path: "list/1" },
    ],
    cta: "Get Started",
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

function Layout({ children }) {
  const { navbar, footer } = projectData;
  const { logo, navLinks, cta } = navbar;

  return (
    <>
      <NavbarComponent
        logoProps={{ logoSvg: logo, logoText: "Logo" }}
        links={navLinks}
        ctaProps={{ loginText: cta, buttonProps: "primary" }}
      />
      {children}
      <Footer footerData={footer} />
    </>
  );
}

export default Layout;
