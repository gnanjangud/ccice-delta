import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";
import "./Style.css";
import React, { useState, useEffect } from "react";


function CCICE() {


  const location = useLocation()
  const { customerId } = location.state

  const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=customerId&id="
        + customerId 
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

  var i = 1;




  return (

    <div className="App">

      <br></br>


      <h2>Customer Centric Itinerary Creation Engine</h2>

      <br></br>

      <h2>Rendering {data.itinerary ? Object.keys(data.itinerary)[0].replace(/([a-z])([A-Z])/g, '$1 $2') : null}</h2>

      <br></br>

      {data.itinerary ? 

      <div>
            <table >
              <tr>
                <th>Serial Number</th>
                <th>Itinerary Offer ID</th>
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
                      <Link to="/ccice/itineraryOffer" state={{ itineraryOfferId: itineraryOffer.itineraryOfferId }}>
                    {itineraryOffer.itineraryOfferId}
                    </Link>
                    </nav>
                  </td>
                  <td>{itineraryOffer.customerId}</td>
                  <td>{itineraryOffer.itineraryOfferUpdateDatetime}</td>
                  <td>{Object.keys(itineraryOffer.travellers).length}</td>
                </tr>
        );
      }) : null}

      </table>
      </div> 
      : null }

      <br></br>
      <br></br>

      {
        /*
        data.itinerary ? data.itinerary.itineraryOffers.map((itineraryOffer, index) => {
          return (
            <div>
              <table>
                <tr>
                  <th style={{ width: "20%" }}>Itinerary Attirbute Name</th>
                  <th>Itinerary Attribute Value</th>
                </tr>
                {Object.entries(itineraryOffer).map(([key, value]) => (
                  <tr>
                    <td><strong>{key.replace(/([a-z])([A-Z])/g, '$1 $2')}:</strong></td>
                    <td>{JSON.stringify(value)}</td>
                  </tr>
                ))}
              </table>
            </div>
          );
        }) : null
        */
      }
      
    </div>
  );
}

export default CCICE;