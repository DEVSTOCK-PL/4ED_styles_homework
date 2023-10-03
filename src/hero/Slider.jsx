import { useState, useEffect } from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
	width: 576px;
	height: 360px;
	border-radius: 8px;
	position: relative;
	overflow: hidden;
`
const Image = styled.img`
	position: absolute;
	transform: translateX(-5%); 
	width: 120%;
	height: 120%;
	opacity: 0;
	transition: opacity 2s;
	${ ( { active } ) => active && `opacity: 1;` }
`
const CircleContainer = styled.div`
	position: absolute;
	left: 50%;
	bottom: 30px;
	transform: translateX(-50%);
	display: flex;
	gap: 16px;
	
`
const Circle = styled.div`
	background-color: ${ ( { active } ) => ( active ? '#FFFFFF' : '#D1D5DB') };
	width: 12px;
	height: 12px;
	border-radius: 12px;
`

function Slider ( { images } ) {
	const [currentIndex, setCurrentIndex] = useState(0);
	
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3500);
		return () => clearInterval(interval);
	}, [images]);
	
	
	return (
		<SliderContainer>
			{images.map((image, index) => (<Image
				key={index}
				src={image}
				active={index === currentIndex}/>))}
			<CircleContainer>
				{images.map((_, index) => (<Circle 
					key={index}
					active={index === currentIndex}/>))}
			</CircleContainer>	
		</SliderContainer>
	);
}
export default Slider;
