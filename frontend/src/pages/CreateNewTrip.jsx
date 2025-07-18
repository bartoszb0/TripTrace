import "../styles/CreateNewTrip.css"

export default function CreateNewTrip() {
    // TODO - dodac walidacje ze endDate nie moze byc mniejszy od startDate

    function handleSubmit(formData) {
        const destination = formData.get('destination')
        const startDate = formData.get('startDate')
        const endDate = formData.get('endDate')
        const description = formData.get('description')
        const photos = formData.get('photos')

        console.log(destination)
        console.log(startDate)
        console.log(endDate)
        console.log(description)
        console.log(photos)
    }

    return (
        <>
            <h1>form here</h1>
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