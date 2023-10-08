import styled from 'styled-components'

const Container = styled.div`
	width: 552px;
	height: 41px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	@media( max-width: 640px) {
		width: 303px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 303px;
	}
`
const Label = styled.div`
	width: 552px;
	height: 27px;
	display: flex;
	justify-content: space-between;
	align-items: space-between;
	align-items: center;
	
	@media( max-width: 640px) {
		width: 303px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 403px;
	}
`
const LeftItem = styled.div`
	width: 178px;
	height: 27px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Sum = styled.div`
	width: 86px;
	height: 27px;
	font-size: 18px;
	color: #FFFFFF;
	font-weight: 700;
	line-height: 27px;
	text-align: left;
`
const Goal = styled.div`
	width: 84px;
	height: 21px;
	font-size: 14px;
	line-height: 21px;
	font-weight: 400;
	color: #9CA3AF;
	text-align: left;
`
const RightItem = styled.div`
	width: 116px;
	height: 18px;
	color: #9CA3AF;
	font-weight: 400;
	line-height: 18px;
	font-size: 12px;
	text-align: right;
`
const BarComplite = styled.div`
	width: 552px;
	height: 10px;
	border-radius: 2px;
	background-color: #374151;
	
	@media( max-width: 640px) {
		width: 303px;
	}
	@media (min-width: 641px) and (max-width: 768px) {
		width: 403px;
	}
`
const BarProgress = styled.div`
	width: ${props => props.progress}%;
	height: 10px;
	border-radius: 2px;
	background-color: #1C64F2;
`

const ProgressBar = ( {colected, goal, donors} ) => {
	let progress = (colected * 100 / goal);
	let goalK = goal/1000;
	
	let colectedToNumber = parseInt(colected, 10);
	let formattedColected = colectedToNumber.toLocaleString('en-US');
	
	let donorsToNumber = parseInt(donors, 10);
	let formattedDonors = donorsToNumber.toLocaleString('en-US');
	
	return (
		<Container>
			<Label>
				<LeftItem>
					<Sum>${formattedColected}</Sum>
					<Goal>of {goalK}k goal</Goal>
				</LeftItem>
				<RightItem>{formattedDonors} donors</RightItem>
			</Label>
			<BarComplite>
				<BarProgress progress={progress}></BarProgress>
			</BarComplite>
		</Container>
	);
	
}
export default ProgressBar;