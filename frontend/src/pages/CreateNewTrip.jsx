import "../styles/CreateNewTrip.css"
import ShowError from '../components/ShowError'
import { useState } from 'react'

export default function CreateNewTrip() {
    const [error, setError] = useState({
        display: false,
        message: ''
    })

    function validateDates(dateOne, dateTwo) {
        if (new Date(dateOne) > new Date(dateTwo)) {
            setError({
                display: true,
                message: 'Start date can not be set to later than end date'
            })
            return false
        } else {
            setError({
                display: false
            })
            return true
        }
    }

    function handleSubmit(formData) {
        const destination = formData.get('destination') // podzielić na country i city, dodać z listy wyboru
        const startDate = formData.get('startDate')
        const endDate = formData.get('endDate')
        const description = formData.get('description')
        const photos = formData.get('photos') // only accepts jpg and png

        console.log(destination)
        console.log(startDate)
        console.log(endDate)
        console.log(description)
        console.log(photos)

        if (!validateDates(startDate, endDate)) {
            return
        }

        console.log('ok')
    }

    return (
        <>
            <h1>form here</h1>
            {error.display && <ShowError message={error.message} setError={setError}/>}
            <form action={handleSubmit} className="creationForm">
                <label htmlFor="destination">Destination</label>
                <input
                    id="destination" name="destination"
                ></input>

                <div className="datesInput">
                    <label htmlFor="startDate">Start date:</label>
                    <input
                        id="startDate" name="startDate"
                        type="date"
                    ></input>

                    <label htmlFor="endDate">End date:</label>
                    <input 
                        id="endDate" name="endDate"
                        type="date"
                    ></input>
                </div>

                <label htmlFor="description">Description</label>
                <textarea
                    id="description" name="description"
                    type="textarea"
                    className="formDescription"
                ></textarea>

                <label htmlFor="photos">Photos (zrobic drag and drop)</label>
                <input
                    id="photos"
                    type="file"
                    className="photosInput"
                    multiple
                ></input>

                <button type="submit">Create Trip</button>
            </form>
        </>
    )
}