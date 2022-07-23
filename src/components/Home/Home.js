import NavBar from "./Navbar/Navbar"
import Gallery from "./Gallery/gallery"

const Home = () => {
    const genreTiles = () => {
        let tiles = []
        for (let i = 0; i < 3; i++) {
            tiles.push(<Gallery key={i} />)
        }
        return (
            <div className="genre"><h3>Genre</h3>{tiles}</div>
        )
    }

    return (
        <>
            <NavBar />
            {genreTiles()}
            {genreTiles()}
            {genreTiles()}
        </>
    )
}

export default Home