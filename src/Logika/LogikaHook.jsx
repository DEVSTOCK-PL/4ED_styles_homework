import React, { useEffect, useState, createContext } from "react";

const useDonationLogic = (initialDonations, initialDonations2) => {

    const [donations, setDonations] = useState(0);
    const [donations2, setDonations2] = useState(0);

    const [totalDonate, setTotalDonate] = useState(false);
    const [totalDonate2, setTotalDonate2] = useState(false);

    const [progress, setProgress] = useState(0)
    const [progress2, setProgress2] = useState(0)


    const handleClick = (donate) => {
        setDonations((prev) => prev + donate)
    }
    const handleClick2 = (donate2) => {
        setDonations2((prev) => prev + donate2)
    }
    useEffect(() => {
        setProgress((donations / initialDonations) * 100)
        if (donations >= initialDonations) {
            setTotalDonate(true)
        } else {
            setTotalDonate(false)
        }
        setProgress2((donations2 / initialDonations2) * 100)
        if (donations2 >= initialDonations2) {
            setTotalDonate2(true)
        } else {
            setTotalDonate2(false)
        } 
    }, [donations, donations2, initialDonations, initialDonations2])
    
    return {
        donations, 
        totalDonate,
        progress,
        handleClick,
        donations2, 
        totalDonate2,
        progress2,
        handleClick2,
        };
   }

export default useDonationLogic

