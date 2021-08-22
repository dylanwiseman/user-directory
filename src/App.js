import React, { useState } from "react";
import "./App.css";

import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";
import data from "./data";

const appstyle = {
  backgroundColor: "#222222",
};

export default function App() {
  const [userId, setUserId] = useState(0);
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newJobTitle, setNewJobTitle] = useState("");
  const [newEmployer, setNewEmployer] = useState("");
  const [newMovies, setNewMovies] = useState([]);
  const [userData, setData] = useState(data);
  const [toggle, setToggle] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [currentFName, setCurrentFName] = useState(userData[userId].name.first);
  const [currentLName, setCurrentLName] = useState(userData[userId].name.last);
  const [currentCity, setCurrentCity] = useState(userData[userId].city);
  const [currentCountry, setCurrentCountry] = useState(
    userData[userId].country
  );
  const [currentTitle, setCurrentTitle] = useState(userData[userId].title);
  const [currentEmployer, setCurrentEmployer] = useState(
    userData[userId].employer
  );
  const [currentMovies, setCurrentMovies] = useState(
    userData[userId].favoriteMovies
  );

  function goNext() {
    if (userId < userData.length - 1) {
      setUserId(userId + 1);
    }
  }
  function goPrevious() {
    if (userId >= 1) setUserId(userId - 1);
  }
  function deleteFn() {
    data.splice(userId, 1);
    setUserId(userId - 1);
  }
  function handleFirstNameChange(val) {
    setNewName(val);
  }
  function handleEditName(val) {
    setCurrentFName(val);
  }
  function handleLastNameChange(val) {
    setNewLastName(val);
  }
  function handleEditLName(val) {
    setCurrentLName(val);
  }
  function handleCityChange(val) {
    setNewCity(val);
  }
  function handleEditCity(val) {
    setCurrentCity(val);
  }
  function handleCountryChange(val) {
    setNewCountry(val);
  }
  function handleEditCountry(val) {
    setCurrentCountry(val);
  }
  function handleTitleChange(val) {
    setNewJobTitle(val);
  }
  function handleEditTitle(val) {
    setCurrentTitle(val);
  }
  function handleEmployerChange(val) {
    setNewEmployer(val);
  }
  function handleEditEmployer(val) {
    setCurrentEmployer(val);
  }
  function handleMoviesChange(val) {
    setNewMovies(val.split(","));
  }
  function handleEditMovies(val) {
    setCurrentMovies(val.split(","));
  }
  function handleClick() {
    let copyData = [...userData];
    copyData.push({
      id: 100,
      name: { first: newName, last: newLastName },
      city: newCity,
      country: newCountry,
      employer: newEmployer,
      title: newJobTitle,
      favoriteMovies: newMovies,
    });
    setData(copyData);
    setNewName("");
    setNewLastName("");
    setNewCountry("");
    setNewCity("");
    setNewEmployer("");
    setNewJobTitle("");
    setNewMovies([]);
  }

  function handleEditClick() {
    let copyData = [...userData];
    copyData[userId].name.first = currentFName;
    copyData[userId].name.last = currentLName;
    copyData[userId].city = currentCity;
    copyData[userId].country = currentCountry;
    copyData[userId].title = currentTitle;
    copyData[userId].favoriteMovies = currentMovies;
    setData(copyData);
  }

  function handleNew() {
    setToggle(!toggle);
  }

  function handleEdit() {
    setToggleEdit(!toggleEdit);
  }

  return (
    <div className="App" style={appstyle}>
      <Header />
      <Main i={userId} userData={userData} />
      <Navigation
        goNext={goNext}
        goPrevious={goPrevious}
        deleteFn={deleteFn}
        handleNew={handleNew}
        handleEdit={handleEdit}
      />
      {toggle && (
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={newName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={newLastName}
            onChange={(e) => handleLastNameChange(e.target.value)}
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={newCity}
            onChange={(e) => handleCityChange(e.target.value)}
          />
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={newCountry}
            onChange={(e) => handleCountryChange(e.target.value)}
          />
          <label htmlFor="employer">Employer:</label>
          <input
            type="text"
            id="employer"
            value={newEmployer}
            onChange={(e) => handleEmployerChange(e.target.value)}
          />
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            value={newJobTitle}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
          <label htmlFor="movies">Favorite Movies:</label>
          <input
            type="text"
            id="movies"
            value={newMovies}
            onChange={(e) => handleMoviesChange(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(data[0].id);
              handleClick();
            }}
          >
            Submit
          </button>
        </form>
      )}
      {toggleEdit && (
        <form>
          <label htmlFor="editName">First Name:</label>
          <input
            type="text"
            id="editName"
            value={currentFName}
            onChange={(e) => handleEditName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={currentLName}
            onChange={(e) => handleEditLName(e.target.value)}
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={currentCity}
            onChange={(e) => handleEditCity(e.target.value)}
          />
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={currentCountry}
            onChange={(e) => handleEditCountry(e.target.value)}
          />
          <label htmlFor="employer">Employer:</label>
          <input
            type="text"
            id="employer"
            value={currentEmployer}
            onChange={(e) => handleEditEmployer(e.target.value)}
          />
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            value={currentTitle}
            onChange={(e) => handleEditTitle(e.target.value)}
          />
          <label htmlFor="movies">Favorite Movies:</label>
          <input
            type="text"
            id="movies"
            value={currentMovies}
            onChange={(e) => handleEditMovies(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleEditClick();
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

/* <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          city: "",
          country: "",
          title: "",
          employer: "",
          favoriteMovies: "",
        }}
        onSubmit={(values) => {
          const firstName = values.firstName;
          const lastName = values.lastName;
          const city = values.city;
          const title = values.title;
          const country = values.country;
          const employer = values.employer;
          const favoriteMovies = values.favoriteMovies.split(",");
        }}
      >
        {(props) => (
          <Form>
            <label htmlFor="firstName">First Name: </label>
            <Field name="firstName" />
          </Form>
        )}
      </Formik> */
