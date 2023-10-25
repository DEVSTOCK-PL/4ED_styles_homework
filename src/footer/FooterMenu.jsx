import styled from 'styled-components'
import Link from './Link'

import company from './links/companyLinks'
import support from './links/supportLinks'
import learning from './links/learningLinks'
import resources from './links/resourcesLinks'
import legal from './links/legalLinks'

const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  align-self: stretch;
  @media (max-width: 767px) {
    display: flex;
    padding: 32px 16px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    align-self: stretch;
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`
const SectionHeading = styled.h2`
  align-self: stretch;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  text-transform: uppercase;
`

const Menu = () => {
  return (
    <FooterMenuWrapper>
      <Section>
        <SectionHeading>Company</SectionHeading>
        {company.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
      </Section>
      <Section>
        <SectionHeading>help and support</SectionHeading>
        {support.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
      </Section>
      <Section>
        <SectionHeading>learning</SectionHeading>
        {learning.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
      </Section>
      <Section>
        <SectionHeading>resources</SectionHeading>
        {resources.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
      </Section>
      <Section>
        <SectionHeading>legal</SectionHeading>
        {legal.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
      </Section>
    </FooterMenuWrapper>
  )
}

export default Menu
