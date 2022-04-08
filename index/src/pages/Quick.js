import React from "react";
import {arr, originalArray, printError, getArray, quickSort} from "./main.js";

function Quick() {
    let running = true;
    let array = arr.slice();
    
    return (
        <div onLoad={() => {
            originalArray(array);
            quickSort(array).then((result) => {
                running = result;
            });
        }}  style={{backgroundColor: "white", padding: "2.5%", margin: "2.5%"}}>
        <link rel="stylesheet" href="main.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div style={{ textAlign: "center" }}>
            <h2>Quick Sort</h2>
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
                    getArray(quickSort).then((result) => {
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
            <span style={{ color: "orange" }}>Orange - &nbsp;</span>
            <span>Elements less than or equal to pivot in current partition</span>
            <br />
            <span style={{ color: "black" }}>
                <b>Bold</b> -&nbsp;
            </span>
            <span>Current partition</span>
            <br />
            </p>
        </div>
        <div id="arrtable" />
        <div
            id="comments"
            style={{ height: "10%", textAlign: "center", paddingTop: "5%" }}
        />
        <div id="comments2" style={{ height: "10%", textAlign: "center" }} />
        </div>

    );

}

export default Quick;