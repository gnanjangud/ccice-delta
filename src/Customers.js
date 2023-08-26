import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useLocation
} from "react-router-dom";
import "./Style.css";
import React, { useState, useEffect } from "react";


function Customers() {


    const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=customerId&id="
        + ""
        + "&retrieveOperation=offer";
    const [data, setData] = useState([]);


    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }


  var i = 1;

    useEffect(() => {
        fetchInfo();
    }, []);

    return (

        <div className="App">

            <br></br>

            <h2>Customers</h2>

            {
                /*
                data.itinerary ?
                <div>
                    <table>
                        <tr>
                            <th style={{ width: "20%" }}>Itinerary Attirbute Name</th>
                            <th>Itinerary Attribute Name</th>
                        </tr>
                        {data.itinerary ? Object.entries(data.itinerary.itineraryOffers[0]).map(([key, value]) => (

                            <tr>
                                <td><strong>{
                                    key.replace(/([a-z])([A-Z])/g, '$1 $2') 
                                }:</strong></td>
                                <td>{
                                    key == "customerId" ? 
                                    <Link to="/ccice" state={{ customerId: value }}>
                                    {value}
                                    </Link>
                                    : JSON.stringify(value)                                     
                                    }
                                </td>
                            </tr>

                        )) : null}
                    </table>
                </div>
                : null
                */
                
            }

            <br></br>    

    {data.itinerary ?         

    <div>
    <table >
        <tr>
        <th >Serial Number</th>
        <th >Itinerary Offer ID</th>
        <th>Customer Id</th>
        <th>Offered Date</th>
        <th>Number of Travellers</th>
        </tr>

      {data.itinerary ? data.itinerary.itineraryOffers.map((itineraryOffer, index) => {
        return (
                        
                <tr>
                    <td>{i++}</td>
                    <td>
                    <nav>
                        <Link to="/ccice/itineraryOffer" 
                            state={
                                { 
                                    itineraryOfferQuery: {
                                        customerId: itineraryOffer.customerId,
                                        itineraryOfferId: itineraryOffer.itineraryOfferId 
                                    }
                                } 
                            }>
                    {itineraryOffer.itineraryOfferId}
                    </Link>
                    </nav>
                    </td>
                    <td>
                    <nav>
                        <Link to="/ccice" state={{ customerId: itineraryOffer.customerId }}>
                    {itineraryOffer.customerId}
                    </Link>
                    </nav>
                    </td>
                    <td>{itineraryOffer.itineraryOfferUpdateDatetime}</td>
                    <td>{Object.keys(itineraryOffer.travellers).length}</td>
                </tr>
        );
      }) : null}

      </table>
      </div>
      : null }

            <br></br>
        </div>
    );
}

export default Customers;