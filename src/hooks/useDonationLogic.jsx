import { useState } from 'react'

const useDonationLogic = () => {
	const [donate1, setDonate1] = useState(1000);
	const donateUp1 = () => {
		setDonate1(donate1 + 20000);
	}
	console.log("in hook", donate1);
	
	const [donate2, setDonate2] = useState(1000);
	const donateUp2 = () => {
		setDonate2(donate2 + 8000);
	}
	console.log("in hook", donate2);
	
	const [donate3, setDonate3] = useState(1000);
	const donateUp3 = () => {
		setDonate3(donate3 + 8000);
	}
	console.log("in hook", donate3);
	
	const [donate4, setDonate4] = useState(1000);
	const donateUp4 = () => {
		setDonate4(donate4 + 8000);
	}
	console.log("in hook", donate4);
	
	
	return { donate1, donateUp1, donate2, donateUp2, donate3, donateUp3, donate4, donateUp4 };
}
export default useDonationLogic;