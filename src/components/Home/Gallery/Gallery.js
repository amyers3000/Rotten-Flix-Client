import React, { useState, useEffect } from "react";
import "./gallery.css"
import { FetchMovies, genres } from "../../../lib"
import Movie from "./Movie"
import { Header } from "./Header"
import ReactPaginate from "react-paginate";

function Gallery() {      
    const [movies, setMovies] = useState({})
    const [pageNum, setPageNum] = useState({ Action: 0, Adventure: 0, SciFi: 0, Comedy: 0, Horror: 0, Animation: 0 })
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 5
    
    useEffect(() => {
        const fetchMovies = async () => {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`)
            let temp = {}
            const response = await FetchMovies();
            genres.forEach(genre => {
                Object.assign(temp, {[genre]: response.data.filter( d => d.genre === genre)})
                console.log({[genre]:Math.ceil(genre.length / itemsPerPage)})
                setPageCount({...pageCount,[genre]: Math.ceil(genre.length / itemsPerPage)})
            })
            console.log(pageCount, "gallery.js line 26")
            setMovies(temp)            
        }

        fetchMovies()
    }, [itemOffset, itemsPerPage])


    // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pageNum.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

    return (
        <>
            {movies && Object.keys(movies).map((genre) => (
                <div key={genre} className="genre bg-dark text-white">
                    <Header genre={genre} />
                    <div className="movieBottle">{movies[genre].map((data) => (
                        <Movie
                            key={data._id}
                            itemId={data} // NOTE: itemId is required for track items
                        />
                    ))}</div>
                    <ReactPaginate 
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </div>
            ))}
        </>
    )
}



export default Gallery