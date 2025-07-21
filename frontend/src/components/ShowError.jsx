import "../styles/ShowError.css"

export default function ShowError({message, setError}) {
    function closeError() {
        setError({
            display: false,
        })
    }

    return (
        <>
            <div className="errorBox">
                {message}
                <button onClick={closeError}>X</button>
            </div>
        </>
    )
}