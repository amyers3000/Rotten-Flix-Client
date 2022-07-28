import Movie from "./Movie"
import React from "react";
import "./gallery.css"
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import { Header } from "./Header"
import { Footer } from "./Footer"
// import UsePreventBodyScroll from "./usePreventBodyScroll";


function Gallery( props ) {  
    const genreTiles = () => { 
        return (
            <div className="genre bg-dark text-white">
                <ScrollMenu Header={<Header genre={props.movie} />} Footer={<Footer />} LeftArrow={LeftArrow} RightArrow={RightArrow}>
                    <div className="movieBottle">{props.movie.map(( id, i ) => (
                        <Movie
                            itemId={id} // NOTE: itemId is required for track items
                            key={i}
                        />
                    ))}</div>
                </ScrollMenu>                
            </div>
        )
    }

    return (
        <>           
            
            {genreTiles()}
          
        </>
    )
}

export default Gallery