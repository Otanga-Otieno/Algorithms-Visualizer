import { bubbleSort, selectionSort } from "./Algorithms/sort/algorithms.js";

var arr = [54, 5, 92, 49, 23, 8];
//var arr = [20, 3, 15, 4, 6];

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

function clearChildren(id) {

    let element = document.getElementById(id);
    while(element.firstChild) {
        element.removeChild(element.lastChild);
    }

}

function getArray() {

    let input = document.getElementById("userarray").value;
    let arr = input.substring(1, input.length-1).split(",");
    arr = arr.map(Number);
    if(arr.length < 2) return;
    clearChildren("origarray");
    originalArray(arr);
    printArray(arr);

}

function printArray(arr) {

    clearChildren("arrtable");
    console.log(bubbleSort(arr));

}

document.getElementById("getarrbtn").addEventListener("click", getArray);

originalArray(arr);


console.log(bubbleSort(arr));