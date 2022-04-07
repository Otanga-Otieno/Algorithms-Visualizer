import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='p-5'>

      <h2>Sort Algorithms</h2>

      <div>
        <div style={{listStylePosition: "inside"}}>
          <div className='rounded shadow p-2 my-3 bg-white' > <div><Link to={"bubblesort"}> <i className='fas fa-droplet fa-2x mx-5'></i><br/> Bubble Sort</Link></div> </div>
          <div className='rounded shadow p-2 my-3 bg-white' > <div><Link to={"heapsort"}> <i className='fas fa-tree fa-2x mx-5'></i><br/> Heap Sort</Link></div> </div>
          <div className='rounded shadow p-2 my-3 bg-white' > <div><Link to={"insertionsort"}> <i className='fas fa-arrow-right-to-bracket fa-2x mx-5'></i><br/> Insertion Sort</Link></div> </div>
          <div className='rounded shadow p-2 my-3 bg-white' > <div><Link to={"quicksort"}> <i className='fas fa-jet-fighter fa-2x mx-5'></i><br/> Quick Sort</Link></div> </div>
          <div className='rounded shadow p-2 my-3 bg-white' > <div><Link to={"selectionsort"}> <i className='fas fa-arrow-up-short-wide fa-2x mx-5'></i><br/> Selection Sort</Link></div> </div>
        </div>
      </div>

    </div>
  );
}

export default App;
