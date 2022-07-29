import NavBar from "./Navbar/Navbar"
import BillBoard from "./Gallery/Billboard"
import Gallery from "./Gallery/Gallery"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"


function Home() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        if (!location.state) return navigate('/')

    }, [])

    return (
        <>
            <NavBar user={location.state.user} />
            <BillBoard />
            <Gallery />
        </>
    )
}

export default Home