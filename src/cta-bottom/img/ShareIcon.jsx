import { useContext } from 'react'
import { ThemeContext } from '../../App'

const ShareIcon = () => {
  const theme = useContext(ThemeContext)
  return (
    <svg
      className='buttonGreyText'
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 512 512'
      id='share'
      width='24px'
      height='24px'>
      <path d='M386.445,182.626A76.868,76.868,0,1,0,319.09,142.7L186.127,212.03a76.8,76.8,0,1,0-1.057,95.648l130.876,68.045a77.114,77.114,0,1,0,10.313-17.179L195.613,290.62a76.659,76.659,0,0,0,.695-61.342L331.1,158.994A76.578,76.578,0,0,0,386.445,182.626Z'></path>
    </svg>
  )
}
export default ShareIcon