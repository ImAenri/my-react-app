import './App.css';
import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom'
import React, {useState} from 'react';
import Home from './HomePage';
import About from './AboutUs';
import Contact from './ContactUs';

function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loggedIn, setLoggedIn] = useState(false);

const handleLogIn = (e) => {
    e.preventDefault();
    const verifyUser = credentials.find((cred) => cred.username === username && cred.password === password);

    if (verifyUser){
    setLoggedIn(true);
    } else {
    alert("Invalid Credentials");
    }

};

const credentials = [
    {username: 'admin', password: 'password'},
    {username: 'user', password: 'password'},
    {username: 'jovie', password: 'thegoat'}
]

return (

<div>
    {!loggedIn? (
    <div className="modal-backdrop">
    <header className="modal">
    <div className='title'>Log In</div>
    <div>
        <form>
        <p>Username</p>
        <input type='text' placeholder='Input Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <p>Password</p>
        <input type='password' placeholder='Input Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </form>
    <br></br>
    <button onClick={handleLogIn}>Log In</button>
    </div>
    </header>
    </div>) : (
    <div>
        <h1>Single Page Application</h1>
        <BrowserRouter>
        <nav className='navbar'>
            <NavLink to="/">Home</NavLink>&nbsp;
            <NavLink to="/about">About</NavLink>&nbsp;
            <NavLink to="/contact">Contact</NavLink>
            </nav>
            <Routes>
            <Route path="/" element = {<Home/>} />              
            <Route path="/about" element = {<About />} />
            <Route path="/contact" element = {<Contact />} />  
            <Route path="/*" element={<Navigate to="/"/> }/>       
            </Routes>
        </BrowserRouter>
    </div>
)}
</div>
);
}
export default Login;