import NavBar from "./Navbar/Navbar"
import BillBoard from "./Gallery/Billboard"
import Gallery from "./Gallery/Gallery"
import { useState, useEffect } from "react"

function Home() {

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
        <NavBar />
        <BillBoard />
        <Gallery movie={movie} />
        </>
    )
}
export default Home