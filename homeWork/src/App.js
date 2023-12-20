import { useState } from 'react';
import './App.css';
import SearchBar from './searchBar/SearchBar'
import HintSearch from './searchBar/HintSerach';
import CurrencyConvert from './convertCurrency/CurrencyConvert';

function App() {
  const [selectFrom, setSelectFrom] = useState()
  // const [hints, setHints] = useState([]);

  // console.log("hint:", hints)
  return (
    <div>
      {/* <div className='search-bar-container'>
        <SearchBar setHints={setHints} />
        <HintSearch hints={hints} />
      </div> */}
      <CurrencyConvert />
    </div>
  )
}

export default App;
