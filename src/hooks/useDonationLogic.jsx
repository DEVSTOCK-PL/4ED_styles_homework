import { useState } from 'react'

export const useDonationLogic = (initialDonation = 0, goal = 0) => {
  const [donation, setDonation] = useState(initialDonation)
  const [donors, setDonors] = useState(0)

  const donate = () => {
    setDonation((prev) => prev + 1000)
    setDonors((prev) => prev + 1)
  }
  return [donation, donors, donate]
}
