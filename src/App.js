import './App.css';
import Header from './components/header';
import Body from './components/Body';
import { useState } from 'react';
function App() {
  const [isHamOpen, setIsHamOpen] = useState(false);
  function changeHam() {
    setIsHamOpen(!isHamOpen);
    console.log(isHamOpen)
  }
  return (
    <>
    <div className='max-h-screen flex flex-col'>
    <Header changeHam = {changeHam} />
    <Body isHamOpen = {isHamOpen}/>
    </div>

    </>
  );
}

export default App;
