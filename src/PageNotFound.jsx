import styled from 'styled-components'
import styles from './styles/styles.module.css'
import Main from './styles/Main'
const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50%;
  border: 1px solid var(--gray-700, #374151);
  border-radius: 10px;
`

const Page404 = () => {
  return (
    <Main>
      <NotFound>
        <h1 className={styles.ctaheading}>Error 404</h1>
        <h1 className={styles.ctaheading}>Page Not Found</h1>
        <a className={styles.ctaheading} href='/'>
          Take me back to the main page
        </a>
      </NotFound>
    </Main>
  )
}

export default Page404