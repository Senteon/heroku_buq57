import React, { useState } from "react";
import './App.css';

export default function App() {
    const [data, setData] = useState("-------");

    return(
        <div className="parent">
          <div className="child">
            <p> Your Input Request To Server: </p>
            <input type="text" id="textbox"/>
              <button
                  onClick={() => {
                    fetch("/" + document.getElementById("textbox").value)
                      .then(response => 
                          response.json()
                      )
                      .then(data => {
                          setData(data.response)
                      })
                      .catch(error => {
                          console.log(error)
                      })
                  }}
              >
                Submit
              </button>
            </div>
            <div className="child">
              <p> Response From Server: </p>
              <button className="but"> {data} </button>
            </div>
        </div>
    );
}