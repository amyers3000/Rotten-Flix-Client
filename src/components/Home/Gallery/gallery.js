import Movie from "./Movie"
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import UsePreventBodyScroll from "./usePreventBodyScroll";


function Gallery() {
    

    const genreTiles = () => {
        let tiles = []
        for (let i = 0; i < 20; i++) {
            tiles.push(i)
        }
    const { disableScroll, enableScroll } = UsePreventBodyScroll();

        return (
            <div className="genre bg-dark text-white" onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
                <h3>Genre</h3>
                
                    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                        <div className="movieBottle">{tiles.map((id)=> <Movie itemId={id} key={id} />)}</div>
                    </ScrollMenu>
                
            </div>
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