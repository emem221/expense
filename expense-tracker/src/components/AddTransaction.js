import React, { useState, useContext } from "react";
import { GlobalContext } from "../logic/GlobalState";
import { reactLocalStorage } from "reactjs-localstorage";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    reactLocalStorage.set(text, amount);
  };

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <p>
            Amount <br />
            (Enter ' - ' before the amount to have your expense)
          </p>
          <select value={amount} onChange={handleChange} className="select">
            <option value="+">Income</option>
            <option value="-">Expense</option>
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
