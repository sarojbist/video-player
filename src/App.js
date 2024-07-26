import './App.css';
import Header from './components/header';
import Body from './components/Body';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [isHamOpen, setIsHamOpen] = useState(true);
  const [category, setCategory] = useState(0);
  // I'm sending the category states to body to change its value and use it in fetching videos according to its number
  function changeHam() {
    setIsHamOpen(!isHamOpen);
    console.log(isHamOpen)
  }
  return (
    <Router>

  
    <>
    <div className='max-h-screen flex flex-col'>
    <Header changeHam = {changeHam} />
    <Routes>
      <Route path='/' element={ <Body isHamOpen = {isHamOpen} category={category} setCategory={setCategory} />} />
    </Routes>
   
    </div>

    </>
    </Router>
  );
}

export default App;
