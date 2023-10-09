// import NavLinks from "./NavLink";
import styled from "styled-components";

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1 0 0;
  color: white;
`;

const Anchor = styled.a`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: white;
  text-decoration: none;

  & a:link {
    text-decoration: none;
  }

  & a:visited {
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  & a:active {
    text-decoration: underline;
  }
`;

function NavLinksWrapper({ links }) {
  return (
    <LinksWrapper>
      {links.map((link, index) => (
        <Anchor key={index} href={link}>
          {link}
        </Anchor>
      ))}
    </LinksWrapper>
  );
}

export default NavLinksWrapper;
