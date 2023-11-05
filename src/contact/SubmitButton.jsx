import styled from 'styled-components'

const SendButton = styled.button`
  margin: 2%;
  display: flex;
  width: 182px;
  padding: 10px 20px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
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

const Submit = ({ onSubmit }) => {
  return (
    <SendButton type='submit' onClick={onSubmit} className='buttonBlueBg'>
      Send message
    </SendButton>
  )
}

export default Submit
