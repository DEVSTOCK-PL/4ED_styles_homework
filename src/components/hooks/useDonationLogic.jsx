import { useState, useEffect } from "react";

function UseDonationLogic(initialCurrent, initialTotal) {
  const [current, setCurrent] = useState(initialCurrent);
  const [isTotalAchieved, setIsTotalAchieved] = useState(false);

  useEffect(() => {
    if (current >= initialTotal) {
      setIsTotalAchieved(true);
    }
  }, [current, initialTotal]);

  const donate = () => {
    // setCurrent((prevCurrent) => {
    //   const newCurrent = prevCurrent + 1000;
    //   if (newCurrent > initialTotal) {
    //     return initialTotal;
    //   }

    //   return newCurrent;
    // });
    return console.log("donate");
  };

  // const percentage = (current / initialTotal) * 100;

  return { donationCurrent: current, donate, isTotalAchieved };
}

export default UseDonationLogic;
