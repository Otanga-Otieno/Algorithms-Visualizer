import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='p-5'>

      <h2>Sort Algorithms</h2>

      <ol style={{listStylePosition: "inside"}}>
        <li><Link to={"bubblesort"}>Bubble Sort</Link></li>
        <li><Link to={"heapsort"}>Heap Sort</Link></li>
        <li><Link to={"insertionsort"}>Insertion Sort</Link></li>
        <li><Link to={"quicksort"}>Quick Sort</Link></li>
        <li><Link to={"selectionsort"}>Selection Sort</Link></li>
      </ol>

    </div>
  );
}

export default App;
