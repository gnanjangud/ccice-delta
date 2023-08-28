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


function CCICE({ changeMessage }) {


  const location = useLocation()
  const { customerId } = location.state

  const [destination, setDestination] = useState("");

  const [travelType, setTravelType] = useState("BUSINESS");

  const [travelCompanion, setTravelCompanion] = useState("SELF");

  const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=customerId&id="
    + customerId
    + "&retrieveOperation=offer";
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

  function handleSubmit(event) {

    event.preventDefault();

    //alert(destination);
    //alert(travelType);
    //alert(travelCompanion);
    //changeMessage(destination);    

    //navigate("/ccice", {state:{destination:destination}});

    navigate("/ccice/itineraryOfferSummary", {
      state: {
        itineraryOfferQuery: {
        customerId: customerId,
        destination: destination,
        travelType: travelType,
        travelCompanion: travelCompanion
        }
      }
    });

  }

  function viewOffers(event) {

    event.preventDefault();

    navigate("/ccice/itineraryOffers", {
        state: {
                customerId: customerId
        }
    });

}

function viewOrders(event) {

  event.preventDefault();

  navigate("/ccice/itineraryOrders", {
      state: {
              customerId: customerId
      }
  });

}

  function validateForm() {

    if (destination.length > 0 && travelCompanion.length > 0) {
      //document.getElementById("loginButton").style.background='#a90202';
      return true;
    }

    return true;
  }


  function ClickHandler(event) {

    event.preventDefault();

    //alert(password);
    //alert(skyMilesNumber);
    changeMessage("Hello");


    navigate("/login");

  }


  const navigate = useNavigate();


  return (

    <div className="App">

      <br></br>

      <h2>Customer Centric Itinerary Creation Engine</h2>

      <Form onSubmit={handleSubmit}>

        <br></br>

        <table className="cciceTable" cellspacing="0" cellpadding="0">


          <tr className="cciceTableTr">
            <th className="cciceTableTh">
              <Form.Label>Destination</Form.Label>
            </th>
            <th className="cciceTableTh">
              <Form.Label>Travel Type</Form.Label>
            </th>
            <th className="cciceTableTh">
              <Form.Label>Companion</Form.Label>
            </th>
          </tr>

          <tr className="cciceTableTr">
            <td className="cciceTableTd">


              <Form.Group size="lg" controlId="destination">

                <Form.Control

                  autoFocus

                  type="text"

                  onChange={(e) => setDestination(e.target.value)}

                />

              </Form.Group>
            </td>


            <td className="cciceTableTd">

              <Form.Group size="lg" controlId="travelType">


                <Form.Control

                  as="select"

                  value={travelCompanion}

                  onChange={(e) => setTravelType(e.target.value)}

                >

                  <option value="BUSINESS">Business</option>
                  <option value="LIESURE">Liesure</option>
                  <option value="HOLIDAY">Holiday</option>

                </Form.Control>

              </Form.Group>
            </td>

            <td className="cciceTableTd">

              <Form.Group size="lg" controlId="travelCompanion">


                <Form.Control

                  as="select"

                  value={travelCompanion}

                  onChange={(e) => setTravelCompanion(e.target.value)}

                >

                  <option value="SELF">Self</option>
                  <option value="PASSENGER2">Passenger 2</option>

                </Form.Control>

              </Form.Group>
            </td>


            <td className="cciceTableTd">


              <Form.Group size="lg" >

                <Button id="cciceButton" className="cciceButton" block size="lg" type="submit" disabled={!validateForm()}>

                  Submit

                </Button>

              </Form.Group>

            </td>
          </tr>
        </table>

      </Form>

      <br></br>

      <table class="cciceButtonTable">
        <tr class="cciceButtonTableTr">
          <td class="cciceButtonTableTd">
          <h3>
            <Form onSubmit={viewOffers}>
                <Form.Group size="lg" >

                    <Button id="orderButton" className="orderButton" block size="lg" type="submit" >

                        View Offers

                    </Button>

                </Form.Group>
            </Form>
            </h3>
          </td>
          <td class="cciceButtonTableTd">
          <h3>
            <Form onSubmit={viewOrders}>
                <Form.Group size="lg" >

                    <Button id="orderButton" className="orderButton" block size="lg" type="submit" >

                        View Orders

                    </Button>

                </Form.Group>
            </Form>
            </h3>
          </td>
        </tr>
      </table>

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