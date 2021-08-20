import React from "react";
import "./App.css";

export default function Main(props) {
  let i = props.i;
  let userData = props.userData;
  let person = {
    index: userData[i].id,
    fName: userData[i].name.first,
    lName: userData[i].name.last,
    city: userData[i].city,
    country: userData[i].country,
    jobTitle: userData[i].title,
    employer: userData[i].employer,
    movies: [...userData[i].favoriteMovies],
    numberLength: userData.length,
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
        <h2 className="counter">{`${index}/${numberLength}`}</h2>
      </div>
    </div>
  );
}
