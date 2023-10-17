import { USERS } from "../../database/users";

import "./example2.css";

const Example2 = () => {
  return (
    <>
      <h1>pure CSS</h1>
      {USERS.map(
        ({ id, firstName, lastName, favoriteColor, favoriteItems }) => (
          <div className="users" key={id}>
            <div className="card">
              <div className="cardData">
                <div>Imię: {firstName}</div>
                <div>Nazwisko: {lastName}</div>
                <div>Ulubiony kolor:{favoriteColor}</div>
              </div>
              <div>
                {favoriteItems.map((item) => {
                  return (
                    <div className="fav" key={item}>
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

export default Example2;
