import React from "react";
import {arr, originalArray, getArray, insertionSort} from "./main.js";

function Insertion() {
    let array = arr.slice();

    return (
        <div onLoad={() => {
            originalArray(array);
            insertionSort(array);
        }}  style={{backgroundColor: "white", padding: "2.5%", margin: "2.5%"}}>
        <link rel="stylesheet" href="main.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div style={{ textAlign: "center" }}>
            <h2>Insertion Sort</h2>
        </div>
        <div style={{ textAlign: "center" }}>
            <input
            type="text"
            style={{ width: "60%", height: "1.5rem" }}
            id="userarray"
            placeholder="Enter original array (separate values with coma, full array with square brackets also allowed)"
            />
            <button id="getarrbtn" onClick={() => getArray(insertionSort)} >
            Run
            </button>
        </div>
        <div id="origarray" />
        <div style={{ margin: "5%" }}>
            <p>
            <span>Key: &nbsp;</span>
            <br />
            <span style={{ color: "green" }}>Green - &nbsp;</span>
            <span>Element currently being inserted to position</span>
            <br />
            <span style={{ color: "orange" }}>Orange -&nbsp;</span>
            <span>End of sorted portion</span>
            <br />
            </p>
        </div>
        <div id="arrtable" />
        <div
            id="comments"
            style={{ height: "10%", textAlign: "center", padding: "5%" }}
        />
        </div>

    );

}

export default Insertion;