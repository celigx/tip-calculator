import { useState, useEffect } from 'react'
import './App.sass';

function App() {
  const [bill, setBill] = useState("")
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [activeButton, setActiveButton] = useState("")
  
  useEffect(() => {
    calculate()
  }, [bill, tipPercentage, numberOfPeople])

  // Change bill amount on input change
  const handleBill = (e) => {
    setBill(e.target.value)
  }

  // Change tip percentage on input change
  const handleCustomTipPercentage = (e) => {
    setTipPercentage(e.target.value)
    setActiveButton(e.target.id)
  }

  // Change number of people on input change
  const handleNumberOfPeople = (e) => {
    setNumberOfPeople(e.target.value)
  }

  // Calculate tip amount and total
  const calculate = () => {
    const calculateTipAmount = (Number(bill) * (tipPercentage / 100)) / numberOfPeople
    const calculateTotal = (Number(bill) / numberOfPeople) + calculateTipAmount

    setTipAmount(calculateTipAmount)
    setTotal(calculateTotal)
  }

  const handleTipPercentage = (e) => {
    setTipPercentage(e.target.value)
    setActiveButton(e.target.id)
  }

  // Reset values
  const handleReset = () => {
    setBill("")
    setTipPercentage(null)
    setNumberOfPeople(1)
    setActiveButton(null)
  }

  // Format number as currency
  const handleFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

  return (
    <div className="app">
      <div className="mainContainer">

      <div className="inputContainer">
        <div className="billContainer">
          <h4 className="title">Bill</h4>
          <input className="input" type="number" placeholder="0" value={bill} onChange={handleBill} />
        </div>
        <div className="tip">
          <h4 className="title">Select Tip %</h4>
          <div className="tipPercentage">
            <button className={activeButton === "a" ? "button active" : "button"} id="a" value={5} onClick={handleTipPercentage}>5%</button>
            <button className={activeButton === "b" ? "button active" : "button"} id="b" value={10} onClick={handleTipPercentage}>10%</button>
            <button className={activeButton === "c" ? "button active" : "button"} id="c" value={15} onClick={handleTipPercentage}>15%</button>
            <button className={activeButton === "d" ? "button active" : "button"} id="d" value={25} onClick={handleTipPercentage}>25%</button>
            <button className={activeButton === "e" ? "button active" : "button"} id="e" value={50} onClick={handleTipPercentage}>50%</button>
            <input className={activeButton === "f" ? "button custom" : "button custom"} id="f" type="number" placeholder="Custom" onChange={handleCustomTipPercentage} onClick={handleTipPercentage} />
          </div>
          <div className="numberOfPeople">
            <h4 className="title">Number of people</h4>
            <input className="input" type="number" placeholder="1" value={numberOfPeople} onChange={handleNumberOfPeople} />
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
            <h1>{handleFormat.format(tipAmount)}</h1>
          </div>
        </div>
        <div className="tipAmount">
          <div className="flex">
            <h4 className="title">Total</h4>
            <p className="person">/ person</p>
          </div>
          <div className="number">
            <h1>{handleFormat.format(total)}</h1>
          </div>
        </div>
          <button className="reset" onClick={handleReset}>RESET</button>
      </div>

      </div>
    </div>
  );
}

export default App;
