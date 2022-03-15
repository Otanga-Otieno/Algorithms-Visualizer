import React from "react";
import {arr, originalArray, getArray, bubbleSort} from "./main.js";

function Bubble() {

    return (
        <div onLoad={originalArray} >
        <link rel="stylesheet" href="main.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div style={{ textAlign: "center" }}>
            <h2>Bubble Sort</h2>
        </div>
        <div style={{ textAlign: "center" }}>
            <input
            type="text"
            style={{ width: "60%", height: "1.5rem" }}
            id="userarray"
            placeholder="Enter original array (separate values with coma, full array with square brackets also allowed)"
            />
            <button id="getarrbtn" onClick={getArray} >
            Run
            </button>
        </div>
        <div id="origarray" />
        <div style={{ margin: "5%" }}>
            <p>
            <span>Key: &nbsp;</span>
            <br />
            <span style={{ color: "red" }}>Red, &nbsp;</span>
            <span style={{ color: "green" }}>Green &nbsp;</span>
            <span>- Swapping elements</span>
            <br />
            <span style={{ color: "blue" }}>Blue &nbsp;</span>
            <span>- Checking elements</span>
            <br />
            </p>
        </div>
        <div id="arrtable" />
        </div>
    );


}

//originalArray(arr);
    
//bubbleSort(arr);

export default Bubble;