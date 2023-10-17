import { USERS } from "../../database/users";

const Example1 = () => {
  return (
    <>
      <h1>No styles</h1>
      {USERS.map(
        ({ id, firstName, lastName, favoriteColor, favoriteItems }) => (
          <div key={id}>
            <div>
              <div>
                <div>Imię: {firstName}</div>
                <div>Nazwisko: {lastName}</div>
                <div>Ulubiony kolor:{favoriteColor}</div>
              </div>
              <div>
                {favoriteItems.map((item) => {
                  return <div key={item}>{item}</div>;
                })}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Example1;