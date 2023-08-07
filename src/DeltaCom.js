import React, { useState, useEffect } from "react";
import CCICE from './CCICE';
import Login from './Login';
import ItineraryOffer from "./ItineraryOffer";
import Customers from "./Customers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Style.css";

import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useLocation
} from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h3>Homepage</h3>
        </div>
    );
}

function AboutPage() {
    return (
        <div>
            <h3>About page</h3>
        </div>
    );
}


function ItineraryOffer1() {


  const location = useLocation()
  const { itineraryOfferId } = location.state

    return (
        <div>
            <h3>{itineraryOfferId}</h3>
        </div>
    );
}

function NotFoundPage() {
    return (
        <div>
            Page not found
        </div>
    );
}


function App() {


const [message, setMessage] = useState("Hello");

const changeMessage = (newMessage) => {
    //alert("from parent: " + newMessage);
    setMessage(newMessage);
}

const [customerId, setCustomerId] = useState("");

const setUpCustomerId = () => {
    return setCustomerId("10001")
}

const [login, setLogin] = useState("");

const fetchLogin = () => {
    return setLogin("10004")
}

useEffect(() => {
    fetchLogin();
    setUpCustomerId();
  }, "");



    return (

        <BrowserRouter>

            <div class="divDelta">
            <header>
                <div class="logoTrim">
                    <br></br>
                    <h2>
                    <img class="siteLogo" src="//content.delta.com/content/www/us/en.damAssetRender.20211110T1419424440500.html/content/dam/delta_homepage_redesign/Logo/Delta-Logo.svg" alt="Delta Air Lines"></img>
                    </h2>
                </div>
                <nav>
                <h3>
                    <Link to="/" style={{ textDecoration: 'none' }}><button>Home</button></Link>&nbsp;&nbsp;&nbsp;                    
                    <Link to="/customers" style={{ textDecoration: 'none' }}><button>Customers</button></Link>&nbsp;&nbsp;&nbsp;

                    <Link to="/about" style={{ textDecoration: 'none' }}><button>About</button></Link>&nbsp;&nbsp;&nbsp;

                    {
                    message == "Hello" ?

                        <Link to="/login" style={{ textDecoration: 'none' }}><button>Login</button></Link> :

<                       Link to="/ccice" state={{ customerId: message }} style={{ textDecoration: 'none' }}><button>{message}</button></Link>
                    }                
                    
                    
                </h3>
                </nav>

            </header>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/ccice" element={<CCICE changeMessage={changeMessage}/>} />
                <Route path="/login" element={<Login changeMessage={changeMessage}/>} />
                <Route path="/ccice/itineraryOffer" element= {<ItineraryOffer />}/>
                <Route path="/customers" element= {<Customers />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;