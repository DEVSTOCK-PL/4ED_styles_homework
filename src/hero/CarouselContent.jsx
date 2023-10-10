import Carousel from 'react-multi-carousel'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 1,
    partialVisible: 0,
  },
  tablet: {
    breakpoint: { max: 1280, min: 768 },
    items: 1,
    partialVisible: 0,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    partialVisible: 0,
  },
}
const images = [
  'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/14035731/pexels-photo-14035731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
]

const CarouselWrapper = styled.div`
  width: 576px;
  height: 360px;
  @media (768px <= width <= 1280px) {
    width: 500px;
    height: 300px;
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;
    padding: 32px 16px;
    flex-shrink: 1 0 0;
  }
`

const CarouselContent = ({ deviceType }) => {
  return (
    <CarouselWrapper className='rounded'>
      <Carousel
        ssr
        partialVisbile
        deviceType={deviceType}
        itemClass='image-item'
        responsive={responsive}>
        {images.slice(0, 5).map((image) => {
          return (
            <Image
              className='rounded'
              draggable={false}
              style={{ width: '100%', height: '100%' }}
              src={image}
            />
          )
        })}
      </Carousel>
    </CarouselWrapper>
  )
}

export default CarouselContent
