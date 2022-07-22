import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home"
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/home' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;