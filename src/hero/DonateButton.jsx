import styled from 'styled-components'

const DonateNow = styled.button`
  display: flex;
  width: 182px;
  padding: 12px 20px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #1a56db;
  color: #fff;
  height: 48px;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`

const DonateButton = () => {
  return <DonateNow>Donate Now</DonateNow>
}

export default DonateButton
