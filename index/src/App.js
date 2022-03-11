import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='p-5'>

      <h2>Sort Algorithms</h2>

      <ol style={{listStylePosition: "inside"}}>
        <div className='rounded shadow p-3 m-3 bg-white'><i className='fa-solid fa-droplet-degree'></i><Link to={"bubblesort"}>Bubble Sort</Link></div>
        <div className='rounded shadow p-3 m-3 bg-white'><Link to={"heapsort"}>Heap Sort</Link></div>
        <div className='rounded shadow p-3 m-3 bg-white'><Link to={"insertionsort"}>Insertion Sort</Link></div>
        <div className='rounded shadow p-3 m-3 bg-white'><Link to={"quicksort"}>Quick Sort</Link></div>
        <div className='rounded shadow p-3 m-3 bg-white'><Link to={"selectionsort"}>Selection Sort</Link></div>
      </ol>

    </div>
  );
}

export default App;
