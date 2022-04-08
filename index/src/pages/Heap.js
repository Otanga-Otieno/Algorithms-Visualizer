import React from "react";
import {arr, originalArray, getArray, heapSort} from "./main.js";


function Heap() {
    let array = arr.slice();

    return (
        <div onLoad={() => {
            originalArray(array);
            heapSort(array);
        }}  style={{backgroundColor: "white", padding: "2.5%", margin: "2.5%"}}>
        <link rel="stylesheet" href="main.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div style={{ textAlign: "center" }}>
            <h2>Heap Sort</h2>
        </div>
        <div style={{ textAlign: "center" }}>
            <input
            type="text"
            style={{ width: "60%", height: "1.5rem" }}
            id="userarray"
            placeholder="Enter array"
            />
            <button className="btn btn-success mx-2" id="getarrbtn" onClick={() => getArray(heapSort)} >
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
            </p>
        </div>
        <div id="arrtable" />
        <div id="comments" style={{ height: "10%", textAlign: "center" }} />
        </div>

    );

}

export default Heap;