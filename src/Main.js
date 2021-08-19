import React from "react";
import data from "./data";
import "./App.css";

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

  const userCard = {
    backgroundColor: "#EBEBEB",
    margin: "3em 2em 1em 2em",
    border: "solid 1px darkgrey",
    display: "flex",
    justifyContent: "space-between",
  };

  const inner = {
    padding: "1em 2em",
  };

  return (
    <div style={userCard}>
      <div style={inner}>
        <h2>{`${fName} ${lName}`}</h2>
        <h3>
          From: {city}, {country}
        </h3>
        <h3>Job Title: {jobTitle}</h3>
        <h3>Employer: {employer}</h3>
        <h3>Favorite Movies:</h3>
        <ol>{moviesArray}</ol>
      </div>
      <div>
        <h2 className="counter">{`${i + 1}/${numberLength}`}</h2>
      </div>
    </div>
  );
}
