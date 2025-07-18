import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Home</h1>
            <button onClick={() => navigate('/newtrip')}>+ New Trip</button>
        </>
    )
}