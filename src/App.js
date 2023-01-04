import Home from "./pages/Home";
import "./Home.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  
  const [habitArr, setHabitArr] = useState([]);
  const [count, setCount] = useState(0)
  const [habitName, setHabitName] = useState('');
  const [intervalVal, setIntervalVal] = useState(3);

  let habitObj = {
    id: count,
    name: habitName,
    interval: intervalVal,
  };

  function handleRefs() {
    setHabitArr(oldArr => [...oldArr, habitObj])
    console.log(habitObj)
    setCount(oldCount => oldCount + 1)
    console.log(count)
  }



  return (
    <>
      <section id="header" className="hero has-background-grey-darker">
        <header className="hero-body">
          <h1 className="title is-3 has-text-light">Bell Trainer</h1>
          <h2 className="subtitle is-size-6 pl-1 has-text-light is-underlined">
            Train your habits with Bell Trainer
          </h2>
          <ul id="habit-input-list">
            <li>
              <div className="field has-text-white mb-3">
                <label className="label has-text-white has-text-weight-normal">
                  Habit
                </label>
                <div className="control">
                  <input onChange={e => setHabitName(e.target.value)}
                    type="text"
                    name="habit"
                    class="input habit-input"
                    placeholder="Enter your Habit"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="field px-2">
                <label className="label has-text-white has-text-weight-normal">
                  Sound
                </label>
                <div className="control">
                  <div className="select">
                    <select id="sound" name="sound">
                      <option>Bell</option>
                      <option>Bamboo</option>
                    </select>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="field px-2">
                <label className="label has-text-white has-text-weight-normal">
                  Intervals
                </label>
                <div className="control">
                  <div className="select">
                    <select id="intervals" name="intervals" onChange={e => setIntervalVal(e.target.value)}>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
              onClick={handleRefs}
                id="add-habit"
                className="button is-primary is-light has-text-blue is-rounded is-focused"
              >
                Add Habit
              </button>
            </li>
          </ul>
        </header>
      </section>
      <Routes>
        <Route path="/" element={<Home habitArr={habitArr} />} />
      </Routes>
    </>
  );
}

export default App;
