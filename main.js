import { bubbleSort, selectionSort } from "./Algorithms/sort/algorithms.js";

var arr = [3,1,5,2];

function tablify(arr) {
    let display = document.getElementById("arrtable");
    let table = document.createElement("table");
    let tablerow = document.createElement("tr");

    display.appendChild(table).appendChild(tablerow);
    for(let i=0; i<arr.length; i++) {
        let tablecell = document.createElement("td");
        tablecell.innerHTML = arr[i];
        tablerow.appendChild(tablecell);
    }
}

tablify(arr);


console.log(bubbleSort(arr));