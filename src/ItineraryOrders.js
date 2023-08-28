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
import ItineraryOffer from "./ItineraryOffer";
  
  
  function ItineraryOrders() {
  
    const location = useLocation()

    const { customerId } = location.state
  
    const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=customerId&id="
      + customerId
      + "&retrieveOperation=order";
    const [data, setData] = useState([]);
  
    const fetchInfo = async () => {
      const res = await fetch(url);
      const d = await res.json();
      return setData(d);
    }
  
    /*
        const fetchInfo = () => {
        return fetch(url)
          .then((res) => res.json())
          .then((d) => setData(d))
      }
    */
  
    useEffect(() => {
      fetchInfo();
    }, []);
  
  
  
    var i = 1;
  
    const navigate = useNavigate();
  
  
    return (
  
      <div className="App">
  
        <br></br>
  
        <h2>Customer Centric Itinerary Creation Engine</h2>  
        
        <br></br>
  
        <h2>Ordered Itineraries</h2>
  
        {/*data.itinerary ? Object.keys(data.itinerary)[0].replace(/([a-z])([A-Z])/g, '$1 $2') : null*/}
  
        {data.itinerary ?
  
          <div>
            <table  >
              <tr>
                <th>Serial Number</th>
                <th>Itinerary Order ID</th>
                <th>Itinerary Offer ID</th>
                <th>Customer Id</th>
                <th>Offered Date</th>
                <th>Number of Travellers</th>
              </tr>
  
              {data.itinerary ? data.itinerary.itineraryOrders.map((itineraryOrder, index) => {
                return (
  
                  <tr>
                    <td>{i++}</td>
                    <td>
                      <nav>
                        <Link to="/ccice/itineraryOrder" 
                              state={
                                  { 
                                      itineraryOrderQuery: {
                                          customerId: itineraryOrder.customerId,
                                          itineraryOrderId: itineraryOrder.itineraryOrderId 
                                      }
                                  } 
                              }>
                          {itineraryOrder.itineraryOrderId}
                        </Link>
                      </nav>
                    </td>
                    <td>{itineraryOrder.itineraryOfferId}</td>
                    <td>{itineraryOrder.customerId}</td>
                    <td>{itineraryOrder.itineraryOfferUpdateDatetime}</td>
                    <td>{Object.keys(itineraryOrder.travellers).length}</td>
                  </tr>
                );
              }) : null}
  
            </table>
          </div>
          : null}
  
        {
          //<button onClick={ClickHandler}>Logout</button>    
        }
  
  
  
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
  
  export default ItineraryOrders;