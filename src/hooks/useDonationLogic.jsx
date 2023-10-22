import { useState } from 'react'

export const useDonationLogic = () => {
  const [donation, setDonation] = useState(0)
  const [donors, setDonors] = useState(0)

  const donate = () => {
    setDonation((prev) => prev + 1000)
    setDonors((prev) => prev + 1)
  }
  return [donation, donors, donate]
}
