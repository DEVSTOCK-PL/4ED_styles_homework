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
  color: #fff;
  height: 100%;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`

const DonateButton = ({ onClick }) => {
  return (
    <DonateNow onClick={onClick} className='buttonBlueBg'>
      Donate Now
    </DonateNow>
  )
}

export default DonateButton
