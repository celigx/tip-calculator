import { useState } from 'react'
import './App.sass';

function App() {
  const [bill, setBill] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  // Change bill amount on input change
  const handleBill = (e) => {
    setBill(e.target.value)
  }

  // Change tip percentage on input change
  const handleCustomTipPercentage = (e) => {
    setTipPercentage(e.target.value)
  }

  // Change number of people on input change
  const handleNumberOfPeople = (e) => {
    setNumberOfPeople(e.target.value)
  }

  return (
    <div className="app">
      <div className="mainContainer">

      <div className="inputContainer">
        <div className="billContainer">
          <h4 className="title">Bill</h4>
          <input className="input" type="number" placeholder="0" onChange={handleBill} />
        </div>
        <div className="tip">
          <h4 className="title">Select Tip %</h4>
          <div className="tipPercentage">
            <button className="button" onClick={() => setTipPercentage(5)}>5%</button>
            <button className="button" onClick={() => setTipPercentage(10)}>10%</button>
            <button className="button" onClick={() => setTipPercentage(15)}>15%</button>
            <button className="button" onClick={() => setTipPercentage(25)}>25%</button>
            <button className="button" onClick={() => setTipPercentage(50)}>50%</button>
            <input className="button custom" type="number" placeholder="Custom" onChange={handleCustomTipPercentage} />
          </div>
          <div className="numberOfPeople">
            <h4 className="title">Number of people</h4>
            <input className="input" type="number" placeholder="1" onChange={handleNumberOfPeople} />
          </div>
        </div>
      </div>

      <div className="outputContainer">
        <div className="tipAmount">
          <div className="flex">
            <h4 className="title">Tip Amount</h4>
            <p className="person">/ person</p>
          </div>
          <div className="number">
            <h1>{`$ ${tipAmount}`}</h1>
          </div>
        </div>
        <div className="tipAmount">
          <div className="flex">
            <h4 className="title">Total</h4>
            <p className="person">/ person</p>
          </div>
          <div className="number">
            <h1>{`$ ${total}`}</h1>
          </div>
        </div>
          <button className="reset">RESET</button>
      </div>

      </div>
    </div>
  );
}

export default App;
