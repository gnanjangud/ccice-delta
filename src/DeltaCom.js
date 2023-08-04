import React from "react";
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
    return (

        <BrowserRouter>
            <header>
                <div class="logoTrim">
                    <br></br>
                    <h2>
                    <img class="siteLogo" src="//content.delta.com/content/www/us/en.damAssetRender.20211110T1419424440500.html/content/dam/delta_homepage_redesign/Logo/Delta-Logo.svg" alt="Delta Air Lines"></img>
                    </h2>
                    <br></br>
                </div>
                <nav>
                <h3>
                    <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/ccice" state={{ customerId: "10004" }}>CCICE</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/customers" >Customers</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/login">Login</Link>
                </h3>
                </nav>

                
            </header>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/ccice" element={<CCICE />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ccice/itineraryOffer" element= {<ItineraryOffer />}/>
                <Route path="/customers" element= {<Customers />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;