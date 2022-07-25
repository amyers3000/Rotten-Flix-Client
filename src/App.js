import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Home from "./components/Home/Home"
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Register/>} />
                <Route path='/home' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;