import NavBar from "./Navbar/Navbar"
import Gallery from "./Gallery/gallery"

const Home = () => {
    const genreTiles = () => {
        let tiles = []
        for (let i = 0; i < 30; i++) {
            tiles.push(<Gallery key={i} />)
        }
        return (
            <div className="genre">{tiles}</div>
        )
    }

    return (
        <>
            <NavBar />
            {genreTiles()}
        </>
    )
}

export default Home