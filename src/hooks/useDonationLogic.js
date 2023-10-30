import { useState, useEffect } from 'react';

function useDonationLogic(actualSum, totalSum, numsOfDonors, disabledButton) {
  const [currentAmount, setCurrentAmount] = useState(actualSum);
  const [countOfDonors, setCountOfDonors] = useState(numsOfDonors);
  const [isDisabled, setIsDisabled] = useState(disabledButton);

  const totalSumToDisplay = totalSum / 1000;

  const currentAmountToDisplayArr = String(currentAmount).split('');
  if (currentAmountToDisplayArr.length > 3)
    currentAmountToDisplayArr.splice(-3, 0, ',');
  const currentAmountToDisplay = currentAmountToDisplayArr.join('');

  const currentPercentages = (currentAmount / totalSum) * 100;

  useEffect(() => {
    if (currentPercentages >= 100) setIsDisabled(true);
  }, [currentPercentages]);

  const handleClick = () => {
    const amountToAddPrompt = prompt('What amount to add?');
    if (amountToAddPrompt === null) {
      return;
    } else {
      const amountToAdd = Number(amountToAddPrompt);
      if (amountToAdd > 0) {
        setCurrentAmount((prev) => prev + amountToAdd);
        setCountOfDonors((prev) => prev + 1);
      }
    }
  };

  return {
    currentAmountToDisplay,
    totalSumToDisplay,
    countOfDonors,
    currentPercentages,
    isDisabled,
    handleClick,
  };
}

export default useDonationLogic;
