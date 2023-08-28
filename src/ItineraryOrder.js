import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useLocation
} from "react-router-dom";
import "./Style.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function ItineraryOrder() {


    const location = useLocation()
    const { itineraryOrderQuery } = location.state



    const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=itineraryOrderId&id="
        + itineraryOrderQuery.itineraryOrderId
        + "&retrieveOperation=order";
    const [data, setData] = useState([]);


    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }


    useEffect(() => {
        fetchInfo();
    }, []);


    const navigate = useNavigate();

    
    return (

        <div className="App">

            <br></br>

            <h2>Customer Centric Itinerary Creation Engine</h2>

            <br></br>
            

            <h2>Itinerary Order</h2>

            <br></br>

            {
                data.itinerary ?
                    <div>
                        <table >
                            <tr>
                                <th>Itinerary Attirbute Name</th>
                                <th>Itinerary Attribute Value</th>
                            </tr>
                            {data.itinerary ? Object.entries(data.itinerary.itineraryOrders[0]).map(([key, value]) => (

                                <tr>
                                    <td><strong>{
                                        key.replace(/([a-z])([A-Z])/g, '$1 $2')
                                    }:</strong></td>
                                    <td>{
                                        key == "customerId" ?
                                            <Link to="/ccice" state={ { customerId: value }}>
                                                {value}
                                            </Link>
                                            : key == "travellers" ? 
                                            value.map(
                                                (traveller) => (
                                                    
                                                    <div>
                                                    <table className="childTable">
                                                        <tr>
                                                            <th className="childTableTh">First Name</th>
                                                            <th>Last Name</th>
                                                            <th>Email</th>
                                                            <th>DOB</th>
                                                        </tr>
                                                        <tr>
                                                            <td>{traveller.firstName}</td>
                                                            <td>{traveller.lastName}</td>
                                                            <td>{traveller.email}</td>
                                                            <td>{traveller.dateOfBirth}</td>
                                                        </tr>
                                                    </table>
                                                    <br></br>
                                                    <table className="childTable">
                                                        <tr>
                                                            <th>Hotel Name</th>
                                                            <th>City</th>
                                                            <th>Checkin</th>
                                                            <th>Checkout</th>
                                                            <th>Price</th>
                                                        </tr>
                                                        {
                                                            traveller.service.hotels.map(
                                                                (hotel) => (
                                                                    
                                                                        <tr>
                                                                            <td>{hotel.name}</td>
                                                                            <td>{hotel.city}</td>
                                                                            <td>{hotel.email}</td>
                                                                            <td>{hotel.dateOfBirth}</td>
                                                                        </tr>
                                                                )
                                                            )
                                                        }
                                                    </table>
                                                    <br></br>
                                                    <table className="childTable">
                                                        <tr>
                                                            <th>Flight Number</th>
                                                            <th>Departure Airport</th>
                                                            <th>Departure DateTime</th>
                                                            <th>Arrival Airport</th>
                                                            <th>Arrival DateTime</th>
                                                        </tr>
                                                        {
                                                            traveller.service.transportation.flights.map(
                                                                (flight) => (
                                                                    
                                                                        <tr>
                                                                            <td>{flight.flightNumber}</td>
                                                                            <td>{flight.departureAirport}</td>
                                                                            <td>{flight.departureTime}</td>
                                                                            <td>{flight.arrivalAirport}</td>
                                                                            <td>{flight.arrivalTime}</td>
                                                                        </tr>
                                                                )
                                                            )
                                                        }
                                                    </table>
                                                    <br></br>
                                                    <table className="childTable">
                                                        <tr>
                                                            <th>Service Provider</th>
                                                            <th>Pickup Location</th>
                                                            <th>Pickup DateTime</th>
                                                            <th>Dropoff Location</th>
                                                            <th>Dropoff DateTime</th>
                                                        </tr>
                                                        {
                                                            traveller.service.transportation.cabServices.map(
                                                                (cabService) => (
                                                                    
                                                                        <tr>
                                                                            <td>{cabService.serviceProvider}</td>
                                                                            <td>{cabService.pickUpLocation}</td>
                                                                            <td>{cabService.pickUpDateTime}</td>
                                                                            <td>{cabService.dropOffLocation}</td>
                                                                            <td>{cabService.dropOffDateTime}</td>
                                                                        </tr>
                                                                )
                                                            )
                                                        }
                                                    </table>
                                                    <br></br>
                                                    <table className="childTable">
                                                        <tr>
                                                            <th>Service Provider</th>
                                                            <th>Pickup Location</th>
                                                            <th>Pickup DateTime</th>
                                                            <th>Dropoff Location</th>
                                                            <th>Dropoff DateTime</th>
                                                        </tr>
                                                        {
                                                            traveller.service.transportation.carRentals.map(
                                                                (carRental) => (
                                                                    
                                                                        <tr>
                                                                            <td>{carRental.serviceProvider}</td>
                                                                            <td>{carRental.pickUpLocation}</td>
                                                                            <td>{carRental.pickUpDateTime}</td>
                                                                            <td>{carRental.dropOffLocation}</td>
                                                                            <td>{carRental.dropOffDateTime}</td>
                                                                        </tr>
                                                                )
                                                            )
                                                        }
                                                    </table>
                                                    </div>
                                                )
                                            )
                                            :value
                                    }
                                    </td>
                                </tr>

                            )) : null}
                        </table>
                    </div>
                : null
            }
        </div>
    );
}

export default ItineraryOrder;