import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useLocation
  } from "react-router-dom";
  import Form from "react-bootstrap/Form";
  import Button from "react-bootstrap/Button";
  import "./Style.css";
  import { useNavigate } from "react-router-dom";
  import React, { useState, useEffect } from "react";
  import cdgItinerary from "./Itineraries/ATL-CDG-2.png";
  import faiItinerary from "./Itineraries/ATL-FAI.png";
  import bomItinerary from "./Itineraries/ATL-BOM.png";
import ItineraryOffer from "./ItineraryOffer";
  
  
  function ItineraryEngine() {
  
    const location = useLocation()

    const { itineraryEngineQuery } = location.state

  
    return (
  
      <div className="App">

        {
            itineraryEngineQuery.destination === "CDG" ? <img className="itineraryImage" src={cdgItinerary} alt={"Itinerary"}/>
            : itineraryEngineQuery.destination === "FAI" ? <img className="itineraryImage" src={faiItinerary} alt={"Itinerary"}/>
            : <img className="itineraryImage" src={bomItinerary} alt={"Itinerary"}/>
        
        }  
        
      </div>
    );
  }
  
  export default ItineraryEngine;