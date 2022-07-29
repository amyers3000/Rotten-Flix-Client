import React, { useState, useEffect } from "react";
import "./gallery.css"
import { FetchMovies, genres } from "../../../lib"
import Movie from "./Movie"
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import { Header } from "./Header"
import { Footer } from "./Footer"

function Gallery( props ) {      
    const [movies, setMovies] = useState({})

    useEffect(() => {
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
            {movies && Object.keys(movies).map((genre) => (
                <div key={genre} className="genre bg-dark text-white">
                    <ScrollMenu Header={<Header genre={genre} />} Footer={<Footer />} LeftArrow={LeftArrow} RightArrow={RightArrow}>
                        <div className="movieBottle">{movies[genre].map((data) => (
                            <Movie
                                key={data._id}
                                itemId={data} // NOTE: itemId is required for track items
                            />
                        ))}</div>
                    </ScrollMenu>
                </div>
            ))}
        </>
    )
}

export default Gallery