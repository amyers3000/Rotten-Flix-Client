import NavBar from "./Navbar/Navbar"
import BillBoard from "./Gallery/Billboard"
import Gallery from "./Gallery/Gallery"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://rotten-flix-api.herokuapp.com/movies')
            const data = await response.json()
            // console.log(data)
            if (data.length > 0) {
                setMovie(data)
            }
        }
        fetchMovies()
    }, [])

    return (
        <>
            {!location.state && navigate('/')}
            <NavBar />
            <BillBoard />
            <Gallery movie={movie} />
        </>
    )
}
export default Home