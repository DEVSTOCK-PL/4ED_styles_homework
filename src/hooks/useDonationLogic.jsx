import { useState } from 'react'

export const useDonationLogic = (initialDonation = 0, initialDonors) => {
  const [donation, setDonation] = useState(initialDonation)
  const [donors, setDonors] = useState(initialDonors)

  const donate = () => {
    setDonation((prevDonation) => prevDonation + 1000)
    setDonors((prevDonors) => prevDonors + 1)
  }
  return { donation, donors, donate }
}
