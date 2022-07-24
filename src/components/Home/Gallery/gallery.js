import Movie from "./Movie";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const Gallery = () => {
    const genreTiles = () => {
        let tiles = []
        for (let i = 0; i < 4; i++) {
            tiles.push(<Movie key={i} />)
        }
        return (
            <div className="genre"><h3>Genre</h3><div className="movieBottle">{tiles}</div></div>
        )
    }

    return (
        <>            
            {genreTiles()}
            {genreTiles()}
            {genreTiles()}
            {genreTiles()}
            {genreTiles()}
            {genreTiles()}
            {genreTiles()}
            {genreTiles()}
            {genreTiles()}
        </>
    )
}

export default Gallery