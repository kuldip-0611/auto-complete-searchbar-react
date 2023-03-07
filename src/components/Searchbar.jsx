import React, { useState } from "react";
import data from "../data";
import "./searchbar.css";

const uniqueTitle = [];

data.map((item) => {
  if (uniqueTitle.includes(item.title)) {
    return null;
  } else {
    uniqueTitle.push(item.title);
  }
});

const Searchbar = () => {
  const [value, setValue] = useState("");

  const searchList = (searchTerm) => {
    setValue(searchTerm);
    console.log("searchTerm", searchTerm);
  };
  return (
    <>
      <div className="search-container">
        <div className="search-inner">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => Searchbar(value)}>Search</button>
        </div>
      </div>

      <div className="dropdown">
        {uniqueTitle
          .filter((item) => {
            const search = value.toLocaleLowerCase();
            const title = item.toLocaleLowerCase();

            return search && title.startsWith(search) && title != search;
          })
          .map((item) => (
            <div onClick={() => searchList(item)} className="dropdown-row" key={item}>
              {item}
            </div>
          ))}
      </div>
    </>
  );
};

export default Searchbar;
