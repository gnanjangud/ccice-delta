import "./App.css";
import React, { useState, useEffect } from "react";

function App() {

  const url = "https://w1zn5oqsa5.execute-api.us-west-2.amazonaws.com/dev/itineraryretrieve?retrieveByAttribute=customerId&id=10004&retrieveOperation=offer"; 
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
      <h1 style={{ color: "green" }}>Rendering {data.itinerary ? Object.keys(data.itinerary)[0] : null}</h1>
    
        {data.itinerary ? data.itinerary.itineraryOffers.map((dataObj, index) =>{
          return (
            <div>
              <tr>
              {Object.entries(dataObj).map(([key, value]) => (               
                <div key={key}>
                    <td><strong>{key}:</strong></td> 
                    <td>{JSON.stringify(value)}</td>
                </div>
              ))}
              </tr>
            </div>
          );
        }) : null}
    </div>
  );
}

export default App;