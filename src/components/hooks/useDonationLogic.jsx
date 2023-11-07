import { useState, useEffect } from "react";

function UseDonationLogic(initialCurrent, initialTotal, initialGoals) {
  const [current, setCurrent] = useState(initialCurrent);
  const [isTotalAchieved, setIsTotalAchieved] = useState(false);
  const [goals, setGoals] = useState(initialGoals);

  useEffect(() => {
    if (current >= initialTotal) {
      setIsTotalAchieved(true);
    }
  }, [current, initialTotal]);

  const donate = (dotation = 10000) => {
    setCurrent((prevCurrent) => {
      const newCurrent = prevCurrent + dotation;
      if (newCurrent > initialTotal) {
        return initialTotal;
      }

      return newCurrent;
    });

    setGoals((prevGoals) => prevGoals + 1);
  };

  return { donationCurrent: current, donate, isTotalAchieved, newGoals: goals };
}

export default UseDonationLogic;
