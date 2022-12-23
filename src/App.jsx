import React from "react";
import Chats from "./Pages/Chats";
import Profile from "./Pages/Profile"
import Home from "./Pages/Home"
import Counter from "./Pages/Counter";
import { Route, Link, Routes } from "react-router-dom";


function App() {
    return (
        <div>
            <header>
                <Link to={'/'}>Home</Link>
                <Link to={'/Chats'}>Chats</Link>
                <Link to={'/Profile'}>Profile</Link>
                <Link to={'/Counter'}>Counter</Link>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Chats" element={<Chats />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Counter" element={<Counter />} />
            </Routes>
        </div >
    )
}

export default App