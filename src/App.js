
import Home from './pages/Home';
import './Home.css'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [intervalVal, setIntervalVal] = useState();
  
  const handleInterval = (event) => {
    setIntervalVal(event.target.value)
    console.log(event.target.value)
  }

  const [habitName, setHabitName] = useState();
  
  const handleHabit = (event) => {
    setHabitName(event.target.value)
    console.log(event.target.value)
  }

  return (
    <>
          <section id="header" className="hero has-background-grey-darker">
        <header className="hero-body">
          <h1 className="title is-3 has-text-light">Train your habits</h1>
          <h2 className="subtitle is-size-6 pl-1 has-text-light">
            {habitName}
            {intervalVal}
          </h2>
          <ul id="exercise-input-list">
            <li>
              <div className="field has-text-white mb-3">
                <label className="label has-text-white has-text-weight-normal">
                  Habit{" "}
                </label>
                <div className="control">
                  <input onChange={handleHabit}
                    type="text"
                    name="exercise"
                    className="input"
                    placeholder="Enter your Exercise"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="field pl-2 mb-3">
                <label className="label has-text-white has-text-weight-normal">
                  Sound
                </label>
                <div className="control">
                  <div className="select">
                    <select id="times" name="times"></select>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="field px-2">
                <label  className="label has-text-white has-text-weight-normal">
                  Interval
                </label>
                <div className="control">
                  <input onChange={handleInterval}
                    type="text"
                    name="exercise"
                    className="input"
                    placeholder="Enter interval seconds"
                  />
                </div>
              </div>
            </li>
            <li>
              <button
                id="add-exercise"
                className="button is-primary is-light has-text-blue is-rounded is-focused"
              >
                Add Exercise
              </button>
            </li>
          </ul>
        </header>
      </section>
     <Routes>
     <Route path="/" element={<Home intervalVal={intervalVal} habitName={habitName}/> } />
      </Routes>
    
   </>
  );
}

export default App;
