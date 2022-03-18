import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='p-5'>

      <h2>Sort Algorithms</h2>

      <div>
        <div style={{listStylePosition: "inside"}}>
          <div className='rounded shadow p-2 my-3 bg-white' > <i className='fas fa-droplet fa-2x mx-5'></i> <div><Link to={"bubblesort"}>Bubble Sort</Link></div> </div>
          <div className='rounded shadow p-2 my-3 bg-white' > <i className='fas fa-tree fa-2x mx-5'></i> <div><Link to={"heapsort"}>Heap Sort</Link></div> </div>
          <div className='rounded shadow p-2 my-3 bg-white' > <i className='fas fa-arrow-right-to-bracket fa-2x mx-5'></i> <div><Link to={"insertionsort"}>Insertion Sort</Link></div> </div>
          <div className='rounded shadow p-2 my-3 bg-white' > <i className='fas fa-jet-fighter fa-2x mx-5'></i> <div><Link to={"quicksort"}>Quick Sort</Link></div> </div>
          <div className='rounded shadow p-2 my-3 bg-white' > <i className='fas fa-arrow-up-short-wide fa-2x mx-5'></i> <div><Link to={"selectionsort"}>Selection Sort</Link></div> </div>
        </div>
      </div>

    </div>
  );
}

export default App;
