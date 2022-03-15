import { bubbleSort, selectionSort, insertionSort, quickSort, heapSort, mergeSort } from "./Algorithms/algorithms.js";

//var arr = [54, 5, 92, 49, 23, 8];
//var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
//var arr = [87, 71, 17, 64, 28, 8, 72, 55, 2, 6, 83, 63, 60, 90, 92];
var arr = [20, 42, 17, 1, 51, 27, 60];

function originalArray(arr) {

    let display = document.getElementById("origarray");
    let text = document.createElement("p");
    text.style.textAlign = "center";
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

function getArray(sortFunction) {

    let input = document.getElementById("userarray").value;
    input = input.replace("[","");
    input = input.replace("]","");
    let arr = input.substring(0, input.length).split(",");
    arr = arr.map(Number);
    if(arr.length < 2) return;
    clearChildren("origarray");
    originalArray(arr);
    printArray(arr, sortFunction);

}

function printArray(arr, sortFunction) {

    clearChildren("arrtable");
    currentSort(arr, sortFunction);

}

function currentSort(arr, sortFunction) {
    sortFunction(arr);
}

//document.getElementById("getarrbtn").addEventListener("click", getArray(window.sortFunc));

//originalArray(arr);

//console.log(insertionSort(arr));
export {arr, originalArray, getArray, bubbleSort, selectionSort, insertionSort, quickSort, heapSort, mergeSort};