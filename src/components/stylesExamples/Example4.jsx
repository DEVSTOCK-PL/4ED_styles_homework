import { USERS } from "../../database/users";

const Example4 = () => {
  return (
    <>
      <h1>Inline styles</h1>
      {USERS.map(
        ({ id, firstName, lastName, favoriteColor, favoriteItems }) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              height: "auto",
              padding: "20px",
              backgroundColor: "#95ab6e",
            }}
            key={id}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#000",
                width: "280px",
                height: "160px",
                margin: "10px",
                padding: "10px",
                backgroundColor: "#935c5c",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div>Imię: {firstName}</div>
                <div>Nazwisko: {lastName}</div>
                <div>Ulubiony kolor:{favoriteColor}</div>
              </div>
              <div>
                {favoriteItems.map((item) => {
                  return (
                    <div
                      style={{
                        color: "#fff",
                        width: "70px",
                        height: "40px",
                        padding: "10px",
                        backgroundColor: "#473253",
                        margin: "10px",
                      }}
                      key={item}
                    >
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

export default Example4;
