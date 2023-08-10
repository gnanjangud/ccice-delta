import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useLocation
} from "react-router-dom";
import "./Style.css";
import React, { useState, useEffect } from "react";


function ItineraryOfferSummary() {


    const location = useLocation()
    const { itineraryOfferQuery } = location.state

    //alert(itineraryOfferQuery.customerId)

    const customerId = itineraryOfferQuery.customerId

    /* 
    const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=itineraryOfferId&id="
        + itineraryOfferId
        + "&retrieveOperation=offer";

        */
    
    const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryengine?" 
                + "customerId=" + itineraryOfferQuery.customerId 
                + "&destination=" + itineraryOfferQuery.destination
                + "&travelType=" + itineraryOfferQuery.travelType
                + "&travelCompanion=" + itineraryOfferQuery.travelCompanion;

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

            <br></br>

            <h2>Customer Centric Itinerary Creation Engine</h2>

            <br></br>

            <h2>Itinerary Offer Summary</h2>

            <br></br>
            
            {data.itineraryOffer ?


                <div>
                    <table >
                        <tr>
                            <th>Itinerary Attirbute Name</th>
                            <th>Itinerary Attribute Value</th>
                        </tr>
                        {data.itineraryOffer ? Object.entries(data.itineraryOffer).map(([key, value]) => (

                            <tr>
                                <td><strong>{
                                    key.replace(/([a-z])([A-Z])/g, '$1 $2') 
                                }:</strong></td>
                                <td>{
                                    key == "itineraryOfferId" ? 
                                    <Link to="/ccice/itineraryOffer" state={{ itineraryOfferId: value }}>
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
        

            </div>
    );
}

export default ItineraryOfferSummary;