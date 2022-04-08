import React from "react";
import {arr, originalArray, printError, getArray, selectionSort} from "./main.js";

function Selection() {
    let running = true;
    let array = arr.slice();

    return (
        <div onLoad={() => {
            originalArray(array);
            selectionSort(array).then((result) => {
                running = result;
            });
        }}  style={{backgroundColor: "white", padding: "2.5%", margin: "2.5%"}}>
        <link rel="stylesheet" href="main.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div style={{ textAlign: "center" }}>
            <h2>Selection Sort</h2>
        </div>
        <div style={{ textAlign: "center" }}>
            <input
            type="text"
            style={{ width: "60%", height: "1.5rem" }}
            id="userarray"
            placeholder="Enter array"
            />
            <button className="btn btn-success mx-2" id="getarrbtn" onClick={() => {
                if(!running) {
                    running = true;
                    getArray(selectionSort).then((result) => {
                        running = result;
                    });
                } else {
                    printError("Please wait for current process to complete! ");
                } 
            }} >
            Run
            </button>
        </div>
        <div id="errors" style={{ height: "10%", margin: "2%", textAlign: "center", color: "red" }} />
        <div id="origarray" />
        <div style={{ margin: "5%" }}>
            <p>
            <span>Key: &nbsp;</span>
            <br />
            <span style={{ color: "green" }}>Green</span>
            <span>- Smallest element in unsorted part array</span>
            <br />
            <span style={{ color: "orange" }}>Orange &nbsp;</span>
            <span>- Sorted part of array</span>
            <br />
            </p>
        </div>
        <div id="arrtable" />
        </div>

    );

}

export default Selection;