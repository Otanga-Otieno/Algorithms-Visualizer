import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
            <Route path='bubblesort' element={<Page />} />
            <Route path='heapsort' element={<Page />} />
            <Route path='insertionsort' element={<Page />} />
            <Route path='quicksort' element={<Page />} />
            <Route path='selectionsort' element={<Page />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
