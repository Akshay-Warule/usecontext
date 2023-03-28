
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Counter2 from './Components/Counter2';
import CompA from './ContextComponent/CompA';
import { createContext } from 'react';

export const NameContext=createContext();
export const MovieContext=createContext()
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Counter2/> */}

     
     <NameContext.Provider value={'Warule...'}>
      <MovieContext.Provider value={'Taree Zammen Par'}>
           <CompA/>
     </MovieContext.Provider>
     </NameContext.Provider>

    </div>
  );
}

export default App;

