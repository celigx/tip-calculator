import './App.sass';

function App() {
  return (
    <div className="app">
      <div className="mainContainer">

      <div className="inputContainer">
        <div className="billContainer">
          <h4 className="title">Bill</h4>
          <input className="input" type="number" placeholder="0" />
        </div>
        <div className="tip">
          <h4 className="title">Select Tip %</h4>
          <div className="tipPercentage">
            <button className="button">5%</button>
            <button className="button">10%</button>
            <button className="button">15%</button>
            <button className="button">25%</button>
            <button className="button">50%</button>
            <input className="button custom" type="number" placeholder="Custom" />
          </div>
          <div className="numberOfPeople">
            <h4 className="title">Number of people</h4>
            <input className="input" type="number" placeholder="1" />
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
            <h1>$8.51</h1>
          </div>
        </div>
        <div className="tipAmount">
          <div className="flex">
            <h4 className="title">Tip Amount</h4>
            <p className="person">/ person</p>
          </div>
          <div className="number">
            <h1>$76.82</h1>
          </div>
        </div>
          <button className="reset">RESET</button>
      </div>

      </div>
    </div>
  );
}

export default App;
