import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bubble from './pages/Bubble';
import Selection  from './pages/Selection';
import Insertion from './pages/Insertion';
import Quick from './pages/Quick';
import Heap from './pages/Heap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export function Page() {
    const path = useLocation().pathname;
    const fullPath = "/Algorithm-Visualizer" + path + ".htm";
    window.location.replace(fullPath);
    
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='bubblesort' element={<Bubble />} />
            <Route path='heapsort' element={<Heap />} />
            <Route path='insertionsort' element={<Insertion />} />
            <Route path='quicksort' element={<Quick />} />
            <Route path='selectionsort' element={<Selection />} />
        </Routes>
        <Routes>
            <Route path='/algoviz' element={<App />} />
            <Route path='/algoviz/bubblesort' element={<Bubble />} />
            <Route path='/algoviz/heapsort' element={<Heap />} />
            <Route path='/algoviz/insertionsort' element={<Insertion />} />
            <Route path='/algoviz/quicksort' element={<Quick />} />
            <Route path='/algoviz/selectionsort' element={<Selection />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
