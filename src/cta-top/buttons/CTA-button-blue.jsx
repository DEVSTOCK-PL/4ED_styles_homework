import styled from 'styled-components'

const ArrowRight = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='21'
    height='21'
    viewBox='0 0 21 21'
    fill='transparent'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.751 6.18219C12.9385 5.99472 13.1928 5.8894 13.458 5.8894C13.7232 5.8894 13.9775 5.99472 14.165 6.18219L18.165 10.1822C18.3525 10.3697 18.4578 10.624 18.4578 10.8892C18.4578 11.1544 18.3525 11.4087 18.165 11.5962L14.165 15.5962C13.9764 15.7783 13.7238 15.8791 13.4616 15.8769C13.1994 15.8746 12.9486 15.7694 12.7632 15.584C12.5778 15.3986 12.4726 15.1478 12.4703 14.8856C12.4681 14.6234 12.5688 14.3708 12.751 14.1822L15.044 11.8892H3.45801C3.19279 11.8892 2.93844 11.7838 2.7509 11.5963C2.56336 11.4088 2.45801 11.1544 2.45801 10.8892C2.45801 10.624 2.56336 10.3696 2.7509 10.1821C2.93844 9.99455 3.19279 9.88919 3.45801 9.88919H15.044L12.751 7.59619C12.5635 7.40866 12.4582 7.15435 12.4582 6.88919C12.4582 6.62403 12.5635 6.36972 12.751 6.18219Z'
      fill='white'
    />
  </svg>
)
const BlueButton = styled.button`
  display: flex;
  width: 152px;
  min-width: fit-content;
  padding: 12px 20px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  color: #fff;
  height: 48px;
`

const CtaBlueButton = ({ children }) => {
  return (
    <BlueButton className='buttonBlueBg'>
      {children}
      {ArrowRight}
    </BlueButton>
  )
}

export default CtaBlueButton
