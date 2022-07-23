import NavBar from "./Navbar/Navbar"
import Gallery from "./Gallery/gallery"

const Home = () => {
    const galleryTiles = () => {
        let tiles = []
        for (let i = 0; i < 12; i++) {
            tiles.push(<Gallery key={i} />)
        }
        return (
            <div className="genre">{tiles}</div>
        )
    }

    return (
        <>
            <NavBar />
            {galleryTiles()}
        </>
    )
}

export default Home