import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  //const url = "https://jsonplaceholder.typicode.com/users";
  const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=customerId&id=10001&retrieveOperation=offer"; 
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Rendering {data.itinerary ? Object.keys(data.itinerary)[0] : null}</h1>
      <center>
      {data.itinerary ? data.itinerary.itineraryOffers.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "50em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{Object.keys(dataObj)[0]} : {dataObj.customerId} </p>
              <p style={{ fontSize: 20, color: 'white' }}>{Object.keys(dataObj)[0]} : {Object.keys(dataObj)[0]} </p>
              <div key={index}>
													<h5>{dataObj.itineraryOfferId}</h5>
													<span>{dataObj.customerId}</span>
													<span>{dataObj.itineraryOfferUpdateDatetime}</span>
													<p>{dataObj.customerId}</p>
							</div>


            </div>
          );
        }): null}

        {data.itinerary ? data.itinerary.itineraryOffers.map((dataObj, index) =>{
          return (
            <div>
              {Object.entries(dataObj).map(([key, value]) => (               
                <div key={key}>
                  <strong>{key}:</strong> 
                </div>
              ))}
            </div>
          );
        }) : null}


      </center>
    </div>
  );
}

export default App;