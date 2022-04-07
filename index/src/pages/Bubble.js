import React from "react";
import {arr, originalArray, getArray, bubbleSort} from "./main.js";

function Bubble() {
    let array = arr.slice();

    return (
        <div onLoad={() => {
            originalArray(array);
            bubbleSort(array);
        }}  style={{backgroundColor: "white", padding: "2.5%", margin: "2.5%"}}>
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
            placeholder="Enter array"
            />
            <button id="getarrbtn" onClick={() => getArray(bubbleSort)} >
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

export default Bubble;