import React from "react";

export function Restaurants() {
  //   const asd = new Request("http://localhost:3000/api/data", {
  //     mode: "no-cors",
  //   });

  const dataAPI = fetch("http://localhost:3000/api/data")
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => console.log(err.message));

  console.log("data:: ", dataAPI);

  //   return (
  //     <div className="list-container">
  //       <ul>
  //         {dataAPI
  //           .sort((a, b) => a.rating - b.rating)
  //           .map((el) => (
  //             <li key={el.id}>{el.name}</li>
  //           ))}
  //       </ul>
  //     </div>
  //   );
}
