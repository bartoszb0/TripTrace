import "../styles/CreateNewTrip.css";
import ShowError from "../components/ShowError";
import { useState } from "react";

export default function CreateNewTrip() {
  // zrobic zeby form sie nie resetowal przy errorze
  // ogarnac co zrobic z destynacja

  const [error, setError] = useState({
    display: false,
    message: "",
  });

  function validateDates(dateOne, dateTwo) {
    if (new Date(dateOne) > new Date(dateTwo)) {
      setError({
        display: true,
        message: "Start date can not be set to later than end date",
      });
      return false;
    } else {
      setError({
        display: false,
      });
      return true;
    }
  }

  function validatePhotos(photos) {
    for (let file of photos) {
      if (
        !file.name.toLowerCase().endsWith(".jpg") &&
        !file.name.toLowerCase().endsWith(".png")
      ) {
        setError({
          display: true,
          message: "PNG and JPG are only accepted file formats",
        });
        return false;
      }
    }
    return true;
  }

  function validatePublicity(publicity) {
    if (publicity !== "public" && publicity !== "private") {
      setError({
        display: true,
        message: "Incorrect publicity setting",
      });
      return false;
    }
    return true;
  }

  function validateFields(
    destination,
    startDate,
    endDate,
    description,
    photos,
    publicity
  ) {
    // See if all fields are passed
    if (!destination || !description || !startDate || !endDate || !publicity) {
      setError({
        display: true,
        message: "All fields are required",
      });
      return false;
    }

    // Dates validation
    if (!validateDates(startDate, endDate)) {
      return false;
    }

    // photos
    if (!validatePhotos(photos)) {
      return false;
    }

    //publicity
    if (!validatePublicity(publicity)) {
      return false;
    }

    return true;
  }

  function handleSubmit(formData) {
    const destination = formData.get("destination"); // podzielić na country i city, dodać z listy wyboru
    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");
    const description = formData.get("description");
    const photos = formData.getAll("photos");
    const publicity = formData.get("publicity");

    if (
      !validateFields(
        destination,
        startDate,
        endDate,
        description,
        photos,
        publicity
      )
    ) {
      return;
    }

    console.log("ok");
  }

  return (
    <>
      <h1>form here</h1>
      {error.display && (
        <ShowError message={error.message} setError={setError} />
      )}
      <form action={handleSubmit} className="creationForm">
        <label htmlFor="destination">Destination</label>
        <input id="destination" name="destination"></input>

        <div className="datesInput">
          <label htmlFor="startDate">Start date:</label>
          <input id="startDate" name="startDate" type="date"></input>

          <label htmlFor="endDate">End date:</label>
          <input id="endDate" name="endDate" type="date"></input>
        </div>

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          type="textarea"
          className="formDescription"
        ></textarea>

        <label htmlFor="photos">Photos (zrobic drag and drop)</label>
        <input
          id="photos"
          type="file"
          name="photos"
          className="photosInput"
          multiple
        ></input>

        <label htmlFor="publicity">Publicity</label>
        <select id="publicity" name="publicity" defaultValue="">
          <option value="" disabled>
            Select publicity option
          </option>
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>

        <button type="submit">Create Trip</button>
      </form>
    </>
  );
}
