import NavBar from "./Navbar/Navbar"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FetchMovies, genres } from "../../lib"
import MovieRow from "./MovieRow/MovieRow"

const Home = () => {
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
    }, [location,navigate])

    return (
        <>
            <NavBar user={location.state.user} />
            <div className="containerMain" style={{backgroundColor: "#141414", color: "#e9ecef"}}>
                {Object.keys(movies).map(movie => (
                    <div key={movie}>
                        <h2>{movie}</h2>
                        <MovieRow movies={movies[movie]} key={movie} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home