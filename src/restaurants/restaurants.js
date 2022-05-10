import React from "react";

export function Restaurants() {
  //   const asd = new Request("/api/data", {
  //     mode: "no-cors",
  //   });

  const dataAPI = fetch("https://jsonplaceholder.typicode.com/users", {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => console.log(err.message));

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
