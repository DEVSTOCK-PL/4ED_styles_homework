import { createContext, useContext, useState } from "react";
import useDonationLogic from "./LogikaHook";

export const DonationContext = createContext();
export const DonationContext2 = createContext();

   
export const useDonationContext = () => {
    return (
        useContext(DonationContext)
    )
}
export const useDonationContext2 = () => {
    const {donations2 = 0, totalDonate2 = false, progress2= 0, handleClick2} = useDonationLogic(0,0)
    return (
        useContext(DonationContext2)
    )
}

export const DonationProvider = (props) => {
    const [donations, setDonations] = useState(0);

    const donate = (amountDonate) => {
        setDonations((prev) => prev + amountDonate)
                console.log(donations, "donations")

    }

    return (
        <DonationContext.Provider value={{ donations, donate }}>
                { props.children }
        </DonationContext.Provider>   
    )
}

// export const DonationProvider2 = (props) => {
//     const [donations2, setDonations2] = useState(0);
//     const donate2 = (amountDonate2) => {
//         setDonations2((prev) => prev + amountDonate2)
//         setTotalDonate2((prev)=> prev + amountDonate2)
//         console.log(donations2, "donations2")
//     }
     
//     return (
//         <DonationContext2.Provider value={{ donations2, totalDonate2, donate2 }}>
//             { props.children }
//         </DonationContext2.Provider>
//     )
// }
export const DonationProvider2 = (props) => {
    const { donations2, totalDonate2, progress2, handleClick2 } = useDonationLogic(0, 0);
    return (
        <DonationContext2.Provider value={{ donations2, totalDonate2, progress2, handleClick2 }} >
            {props.children}
        </DonationContext2.Provider>
    )
}

// export const DonationContextCombo = createContext();
// export const useDonationContextCombo = () => {
//     return useContext(DonationContextCombo);
// };

// export const DonationProviderCombo = ({ children }) => {
//     const [donations, setDonations] = useState(0);
//     const [donations2, setDonations2] = useState(0);
//     const donate = (amountDonate) => {
//         setDonations((prev)=>prev + amountDonate)
//     }
//     const donate2 = (amountDonate2) => {
//         setDonations2((prev) => prev + amountDonate2)
//     }
//     return (
//         <DonationContextCombo.Provider value={{ donations, donate, donations2, donate2 }}>
//             {children}
//         </DonationContextCombo.Provider>
//     )
// }