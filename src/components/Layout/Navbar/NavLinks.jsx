import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const LinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1 0 0;
  color: white;
`;

const Anchor = styled.li`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: white;
  text-decoration: none;
  list-style: none;

  &.active {
    color: #1a56db;
    font-weight: 900;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function NavLinksWrapper({ links }) {
  const { pathname } = useLocation();

  return (
    <LinksWrapper>
      {links.map((link, index) => (
        <Anchor key={index} className={pathname === `/${link}` ? "active" : ""}>
          <StyledLink to={`/${link}`}>{link}</StyledLink>
        </Anchor>
      ))}
    </LinksWrapper>
  );
}

export default NavLinksWrapper;
