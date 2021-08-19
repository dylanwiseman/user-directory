import React from "react";
import data from "./data";

export default function Main(props) {
  let i = props.i;
  let person = {
    index: data[i].id,
    fName: data[i].name.first,
    lName: data[i].name.last,
    city: data[i].city,
    country: data[i].country,
    jobTitle: data[i].title,
    employer: data[i].employer,
    movies: [...data[i].favoriteMovies],
    numberLength: data.length,
  };

  let {
    index,
    fName,
    lName,
    city,
    country,
    jobTitle,
    employer,
    movies,
    numberLength,
  } = person;

  let moviesArray = movies.map((movie, index) => <li key={index}>{movie}</li>);

  return (
    <div>
      <aside>
        <h2>{`${index}/${numberLength}`}</h2>
      </aside>
      <h2>{`${fName} ${lName}`}</h2>
      <h3>
        From: {city}, {country}
      </h3>
      <h3>Job Title: {jobTitle}</h3>
      <h3>Employer: {employer}</h3>
      <h3>Favorite Movies:</h3>
      <ol>{moviesArray}</ol>
    </div>
  );
}
