import 'semantic-ui-css/semantic.min.css'
import 'react-multi-carousel/lib/styles.css'

import { Fragment } from 'react'
import UAParser from 'ua-parser-js'
import Simple from './CarouselContent.jsx'
import CarouselSection from './CarouselSection.jsx'

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const CarouselIndex = ({ deviceType }) => {
  CarouselIndex.getInitialProps = ({ req }) => {
    let userAgent
    if (req) {
      userAgent = req.headers['user-agent']
    } else {
      userAgent = navigator.userAgent
    }
    const parser = new UAParser()
    parser.setUA(userAgent)
    const result = parser.getResult()
    const deviceType = (result.device && result.device.type) || 'desktop'
    return { deviceType }
  }
  return (
    <Fragment>
      <CarouselSection>
        <Simple deviceType={deviceType} />
      </CarouselSection>
    </Fragment>
  )
}

export default CarouselIndex
