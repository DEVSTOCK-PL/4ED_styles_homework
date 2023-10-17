import { USERS } from "../../database/users";

const Example7 = () => {
  return (
    <>
      <h1>Tailwind</h1>
      {USERS.map(
        ({ id, firstName, lastName, favoriteColor, favoriteItems }) => (
          <div className="" key={id}>
            <div className="bg-lime-300">
              <div className="flex flex-col	 bg-lime-700">
                <div className="text-2xl font-bold underline">
                  Imię: {firstName}
                </div>
                <div>Nazwisko: {lastName}</div>
                <div>Ulubiony kolor:{favoriteColor}</div>
              </div>
              <div>
                {favoriteItems.map((item) => {
                  return (
                    <div className="text-xl" key={item}>
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

export default Example7;
