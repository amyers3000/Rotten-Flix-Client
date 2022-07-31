import React, { useState, useEffect } from "react";
import "./gallery.css"
import Movie from "./Movie"
import ReactPaginate from "react-paginate";
import { Header } from "./Header";

function Gallery({data}) {      
    const [itemOffset, setItemOffset] = useState(0)
    const [movies, setMovies] = useState({})
    const [pageNum, setPageNum] = useState({ "Action": 0, "Adventure": 0, "Sci-Fi": 0, "Comedy": 0, "Horror": 0, "Animation": 0 })
    const [pagesVisited, setPagesVisited] = useState({ "Action": 0, "Adventure": 0, "Sci-Fi": 0, "Comedy": 0, "Horror": 0, "Animation": 0 })
    const [pageCount, setPageCount] = useState({ "Action": 0, "Adventure": 0, "Sci-Fi": 0, "Comedy": 0, "Horror": 0, "Animation": 0 })
    const moviesPerPage = 5
    const [display, setDisplay] = useState()
    // -- Change Page Number & Movie Data on Page --//
    const handlePageClick = (event,genre) => {
        const newOffset = (event.selected * moviesPerPage) % movies[genre].length;
        setItemOffset(newOffset);
        console.log(newOffset)
    };


    useEffect(() => {
        setMovies(data)
            // -- Loop over movies data -- //
        const displayMovies = Object.keys(movies).map(genre => {
            return <>
                {/* Build 5 movies per page */}
                <Header genre={genre} />
                <div className="movieBottle">
                    {movies[genre].slice(pagesVisited[genre], pagesVisited[genre] + moviesPerPage)
                    .map(movie => <Movie key={movie._id} itemId={movie} />)}
                </div>
                {/* Build Paginate for each genre */}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={Math.ceil(movies[genre].length / moviesPerPage)}
                    // onPageChange={(e) => handlePageClick(e,genre)}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousLinkClassName={"page-link"}
                    nextLinkClassName={"page-link"}
                    disabledClassName={"disabled"}
                    activeClassName={"active"}
                />
            </>
        })
        setDisplay(displayMovies)
    },[data,movies,pagesVisited])

    return (
        <>{display && display}</>
    )
}



export default Gallery