import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useLocation
} from "react-router-dom";
import "./Style.css";
import React, { useState, useEffect } from "react";


function ItineraryOffer() {


    const location = useLocation()
    const { itineraryOfferId } = location.state



    const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=itineraryOfferId&id="
        + itineraryOfferId
        + "&retrieveOperation=offer";
    const [data, setData] = useState([]);


    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }


    useEffect(() => {
        fetchInfo();
    }, []);



    return (

        <div className="App">


            <h3>{itineraryOfferId}</h3>

            <br></br>

            <h2>Customer Centric Itinerary Creation Engine</h2>

            <h2>Itinerary Offer</h2>

            <br></br>

            <h2>Rendering {data.itinerary ? Object.keys(data.itinerary)[0].replace(/([a-z])([A-Z])/g, '$1 $2') : null}</h2>

            {data.itinerary ?


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
                : null}

            <br></br>            

            <br></br>
        </div>
    );
}

export default ItineraryOffer;