import NavBar from "./Navbar/Navbar"
import BillBoard from "./Gallery/Billboard"
import Gallery from "./Gallery/Gallery"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FetchMovies, genres } from "../../lib"


function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [movies, setMovies] = useState([])

    useEffect(() => {

        if (!location.state) return navigate('/')
        const fetchMovies = async () => {
            let temp = {}
            const response = await FetchMovies();
            genres.forEach(genre => {
                Object.assign(temp, {[genre]: response.data.filter( d => d.genre === genre)})
            })
            setMovies(temp)         
        }

        fetchMovies()
    }, [])

    return (
        <>
            <NavBar user={location.state.user} />
            {/* <BillBoard /> */}
            <Gallery data={movies} />
        </>
    )
}

export default Home