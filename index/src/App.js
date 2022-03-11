import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='p-5'>

      <h2>Sort Algorithms</h2>

      <ol style={{listStylePosition: "inside"}}>
        <div className='rounded shadow p-3 m-3 bg-white'><i className='fas fa-droplet fa-2x mx-5'></i><Link to={"bubblesort"}>Bubble Sort</Link></div>
        <div className='rounded shadow p-3 m-3 bg-white'><i className='fas fa-tree fa-2x mx-5'></i><Link to={"heapsort"}>Heap Sort</Link></div>
        <div className='rounded shadow p-3 m-3 bg-white'><i className='fas fa-arrow-right-to-bracket fa-2x mx-5'></i><Link to={"insertionsort"}>Insertion Sort</Link></div>
        <div className='rounded shadow p-3 m-3 bg-white'><i className='fas fa-jet-fighter fa-2x mx-5'></i><Link to={"quicksort"}>Quick Sort</Link></div>
        <div className='rounded shadow p-3 m-3 bg-white'><i className='fas fa-arrow-up-short-wide fa-2x mx-5'></i><Link to={"selectionsort"}>Selection Sort</Link></div>
      </ol>

    </div>
  );
}

export default App;
