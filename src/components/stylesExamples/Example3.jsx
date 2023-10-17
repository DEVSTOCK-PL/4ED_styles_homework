import { USERS } from "../../database/users";

import styles from "./example3.module.css";

const Example3 = () => {
  return (
    <>
      <h1>CSS modules</h1>
      {USERS.map(
        ({ id, firstName, lastName, favoriteColor, favoriteItems }) => (
          <div className={styles.users} key={id}>
            <div className={styles.card}>
              <div className={styles.cardData}>
                <div>Imię: {firstName}</div>
                <div>Nazwisko: {lastName}</div>
                <div>Ulubiony kolor:{favoriteColor}</div>
              </div>
              <div>
                {favoriteItems.map((item) => {
                  return (
                    <div className={styles.fav} key={item}>
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Example3;
