import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useLocation
} from "react-router-dom";
import "./Style.css";
import React, { useState, useEffect } from "react";


function ItineraryOrderSummary() {



    const location = useLocation()
    const { itineraryOrderQuery } = location.state

    //alert(itineraryOfferQuery.customerId)

    const customerId = itineraryOrderQuery.customerId

    /* 
    const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=itineraryOfferId&id="
        + itineraryOfferId
        + "&retrieveOperation=offer";

        */
    
    const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryengine?" 
                + "operation=" + "order"
                + "&customerId=" + itineraryOrderQuery.customerId 
                + "&itineraryOfferId=" + itineraryOrderQuery.itineraryOfferId;

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

            <h2>Itinerary Order Summary</h2>

            <br></br>
            
            {data.itineraryOrderSummary ?


                <div>
                    <table >
                        <tr>
                            <th>Itinerary Attirbute Name</th>
                            <th>Itinerary Attribute Value</th>
                        </tr>
                        {data.itineraryOrderSummary ? Object.entries(data.itineraryOrderSummary).map(([key, value]) => (

                            <tr>
                                <td><strong>{
                                    key.replace(/([a-z])([A-Z])/g, '$1 $2') 
                                }:</strong></td>
                                <td>{
                                    key == "itineraryOrderId" ? 
                                    <Link to="/ccice/itineraryOrder" state={
                                        { 
                                            itineraryOrderQuery: {
                                                customerId: customerId,
                                                itineraryOrderId: value 
                                            }
                                        } 
                                    }>
                                    {value}
                                    </Link>
                                    : value                                     
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


export default ItineraryOrderSummary;