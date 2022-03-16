import { quickSort, heapSort, mergeSort } from "./Algorithms/algorithms.js";

var arr = [54, 5, 92, 49, 23, 8];
//var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
//var arr = [87, 71, 17, 64, 28, 8, 72, 55, 2, 6, 83, 63, 60, 90, 92];
//var testArr1 = [20, 42, 17, 1, 51, 27, 60];


/*********** VISUALIZATION HELPER FUNCTIONS ***********/
var display = document.getElementById("arrtable");
var comments =  document.getElementById("comments");
var comments2 = document.getElementById("comments2");

function printArrayVisual(arr) {
    let table = document.createElement("table");
    let tablerow = document.createElement("tr");

    display.appendChild(table).appendChild(tablerow);
    for(let i=0; i<arr.length; i++) {
        let tablecell = document.createElement("td");
        tablecell.innerHTML = arr[i];
        tablerow.appendChild(tablecell);
    }
}

async function tablify(arr, swap1 = null, swap2 = null, upto = null) {
    var display = document.getElementById("arrtable");
    removeAllChildren("arrtable");
    let table = document.createElement("table");
    let tablerow = document.createElement("tr");

    display.appendChild(table).appendChild(tablerow);
    for(let i=0; i<arr.length; i++) {
        let tablecell = document.createElement("td");
        tablecell.innerHTML = arr[i];
        tablerow.appendChild(tablecell);

        if( upto != null && i <= upto) tablecell.classList.add("corange");
        if(i == swap1) {
            tablecell.classList.remove("corange");
            tablecell.classList.add("cred");
        }
        if(i == swap2) {
            tablecell.classList.remove("corange");
            tablecell.classList.add("cgreen");
        }

    }

    await sleep(2000);
}


async function noSwapTablify(arr, check1 = null, check2 = null, upto = null) {
    var display = document.getElementById("arrtable");
    removeAllChildren("arrtable");
    let table = document.createElement("table");
    let tablerow = document.createElement("tr");

    display.appendChild(table).appendChild(tablerow);
    for(let i=0; i<arr.length; i++) {
        let tablecell = document.createElement("td");
        tablecell.innerHTML = arr[i];
        tablerow.appendChild(tablecell);

        if(upto != null && i <= upto) tablecell.classList.add("corange");
        if(i == check1 || i == check2) {
            tablecell.classList.add("cblue");
        }
    }

    await sleep(1000);
}

async function tablifyQuickSort(arr, swap1 = null, swap2 = null, left = null, right = null) {
    removeAllChildren("arrtable");
    let table = document.createElement("table");
    let tablerow = document.createElement("tr");

    display.appendChild(table).appendChild(tablerow);
    for(let i=0; i<arr.length; i++) {
        let tablecell = document.createElement("td");
        tablecell.innerHTML = arr[i];
        tablerow.appendChild(tablecell);

        tablecell.classList = "";
        if(i == left) tablecell.classList.add("bleft");
        if(i == right) tablecell.classList.add("bright");
        if(i > left && i < right) tablecell.classList.add("bbold");
        if(i >= left && i <= swap1 && left != null) tablecell.classList.add("corange");

    }

    await sleep(2000);
}

async function visualizeHeapify(arr, sorted, swap1 = -1, swap2 = -1, isEnd = false) {

    let sleepTime = (swap1 < 0 && swap2 < 0) ? 1000 : 2500;
    display.style.textAlign = "center";

    let tree = document.createElement("div");
    tree.style.padding = "50px";

    let depth = 1;
    let spacer = 16;
    let spacerBetween = 256;
    let nextBreak = Math.pow(2, depth);


    for(let i=0; i<arr.length; i++) {

        let br = document.createElement("br");

        let leftArm = document.createElement("div");
        let rightArm = document.createElement("div");
        leftArm.innerHTML = "/";
        rightArm.innerHTML = "\\" + "&nbsp;";

        leftArm.style.textAlign = "left";
        rightArm.style.textAlign = "right";

        var node = document.createElement("div");
        var nodeValue = document.createElement("div");
        node.style.display = "inline-block";
        
        if(i == 0) {
            nodeValue.innerHTML = arr[i] + "";
            node.appendChild(nodeValue);
            node.style.textAlign = "center";
            tree.appendChild(node);
            tree.appendChild(br);
        } else if(i%2 == 0) {
            node.appendChild(rightArm);
            node.style.textAlign = "right";
            nodeValue.style.textAlign = "right";
            node.style.paddingRight = spacerBetween + "px";
            node.style.color = "#2962ff";
            nodeValue.innerHTML = arr[i] + "&nbsp;";
            nodeValue = addSpace(nodeValue, spacer, false);
            node.appendChild(nodeValue);
            node = addSpace(node, spacer, false);
            tree.appendChild(node);
        } else {
            node.appendChild(leftArm);
            node.style.textAlign = "left";
            nodeValue.style.textAlign = "left";
            node.style.color = "#ffc629";
            nodeValue.innerHTML = arr[i] + "&nbsp;";
            nodeValue = addSpace(nodeValue, spacer, true);
            node.appendChild(nodeValue);
            node = addSpace(node, spacer, false);
            tree.appendChild(node);
        }

        if (i == swap1) {
            node.style.color = "red";
        } else if (i == swap2) {
            node.style.color = "green";
        }
        
        if(i > sorted-1 && sorted != 0) {
            node.style.fontWeight = "bold";
            node.style.color = "black";
        }

        if(i == nextBreak) {
            node.style.paddingRight = "0px";
            tree.appendChild(br);
            ++depth;
            spacer /= 2;
            spacerBetween /= 2;
            nextBreak = nextBreak + Math.pow(2, depth);
        }

    }
    display.appendChild(tree);
    
    await sleep(sleepTime);
    if(!isEnd) removeAllChildren("arrtable");
}

function addSpace(node, spaces, after) {

    let space = "";
    for(let i=0; i<spaces; i++) {
        space = space + "&nbsp;";
    }

    (after) ? node.innerHTML = node.innerHTML + space : node.innerHTML = space + node.innerHTML;
    return node;

}

function removeAllChildren(node) {
    let parent = document.getElementById(node);
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//Algorithms
async function bubbleSort(arr) {

    while(true) {
        let swaps = 0;

        for(let i=0; i<arr.length-1; i++) {
            await noSwapTablify(arr, i, i+1);
            if(arr[i+1] < arr[i]) {
                await tablify(arr, i, i+1);
                let swap = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = swap;
                ++swaps;
                await noSwapTablify(arr, i, i+1);
            }
        }
        if(swaps == 0) break;
    }
    tablify(arr);
    return arr;
}

async function selectionSort(arr) {

    for(let i=0; i<arr.length; i++) {
        let min = i;

        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        min != i ? await tablify(arr, -1, min, i-1) : await tablify(arr, -1, -1, i-1);
        let swap = arr[min];
        arr[min] = arr[i];
        arr[i] = swap;
        tablify(arr, -1, -1, i);

    }
    tablify(arr, -1, -1, arr.length);
    return arr;
}

async function insertionSort(arr) {

    for(let i=1; i<arr.length; i++) {
        let position = arr[i];
        let j = i-1;

        removeAllChildren("comments");
        let loops = 0;
        let inserting = document.createElement("span");
        inserting.innerHTML = "Inserting " + arr[j+1] + " into position...";
        comments.appendChild(inserting);

        while(j>=0 && arr[j] > position) {
            await tablify(arr, -1, j+1, i);
            let swap = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = swap;
            await tablify(arr, -1, j, i);
            j = j-1;
            loops++;
        }
        arr[j+1] = position;
        if(loops == 0) {
            let msg = document.createElement("p");
            msg.innerHTML = "&emsp;&emsp; " + arr[i] + " already in place";
            display.appendChild(msg);
        }

    }
    removeAllChildren("comments");
    tablify(arr, -1, -1, arr.length);
    return arr;
}

/************************************* End of algorithms**********************/

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