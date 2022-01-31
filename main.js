import { bubbleSort, selectionSort } from "./Algorithms/sort/algorithms.js";

var arr = [54, 5, 92, 49, 23, 8];

function originalArray(arr) {
    let display = document.getElementById("origarray");
    let text = document.createElement("p");
    text.innerHTML = "Original Array: ";
    display.appendChild(text);
    let table = document.createElement("table");
    let tablerow = document.createElement("tr");

    display.appendChild(table).appendChild(tablerow);
    for(let i=0; i<arr.length; i++) {
        let tablecell = document.createElement("td");
        tablecell.innerHTML = arr[i];
        tablerow.appendChild(tablecell);
    }
}

originalArray(arr);


console.log(bubbleSort(arr));