import React from "react";
import Data from "./address.json"; // 追加

const data = Data;

export const DataAddress = () => {
  return (
    <>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <ul>
                <li>{item.address.street}</li>
                <li>
                  {item.address.city}, {item.address.state} {item.address.zip}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
