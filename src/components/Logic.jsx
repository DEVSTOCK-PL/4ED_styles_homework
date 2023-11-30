import { useState } from "react"

export const useDonationState = (targetDonations) => {
    const [donations, setDonations] = useState(0);

    const handleDonation = (donate) => {
        setDonations((prevDonate) => prevDonate + donate);
    }
    const meterDonate = (donations / targetDonations) * 100;
    return { donations, meterDonate, handleDonation };
}


