
import React, { useEffect, useState } from "react";
import SearchedItems from "./search";

export const Drugs = ({ itemsToShow }) => {
  const [rxDrugs, setRxDrugs] = useState(false); //stan leków na receptę
  const API = "http://185.161.95.77:33733/api/drugs?limit=1&page=3";
  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then(
        (data) =>
          setRxDrugs(
            data
          ) //filtruje po API za Rpz--> analogicznie bedzie w OTC
      )
      .catch((err) => console.log(err));
  }, []);
  console.log(rxDrugs);

    return (
      <>
        <div className="container">
          <h1>Leki na receptę dostępne w naszaj Aptece:</h1>
          <ul>
            {rxDrugs.map((item, index) => {
              return (
                <li
                  className="basket-container__items__item"
                  style={{ width: "85vw", marginTop: "2rem" }}
                  key={index}
                >
                  {item.nazwa} ({item.nazPowStos}), {item.dawka}, {item.postac},{" "}
                  {item.podmOdpow}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  
  //działa!
};
// export default Drugs;