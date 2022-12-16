import Home from "./pages/Home";
import "./Home.css";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
function App() {

  let dataCounter = 0
  const intervalRef = useRef()
  const habitNRef = useRef()
  
  function handleRefs() {
    console.log(intervalRef.current.value)
    console.log(habitNRef.current.value)
    dataCounter++
  }

  let habitObj = {
    id: dataCounter,
    name: habitNRef,
    interval: intervalRef,
  };

  return (
    <>
      <section id="header" class="hero has-background-grey-darker">
        <header class="hero-body">
          <h1 class="title is-3 has-text-light">Bell Trainer</h1>
          <h2 class="subtitle is-size-6 pl-1 has-text-light is-underlined">
            Train your habits with Bell Trainer
          </h2>
          <ul id="habit-input-list">
            <li>
              <div class="field has-text-white mb-3">
                <label class="label has-text-white has-text-weight-normal">
                  Habit
                </label>
                <div class="control">
                  <input ref={habitNRef}
                    type="text"
                    name="habit"
                    class="input habit-input"
                    placeholder="Enter your Habit"
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="field px-2">
                <label class="label has-text-white has-text-weight-normal">
                  Sound
                </label>
                <div class="control">
                  <div class="select">
                    <select id="sound" name="sound">
                      <option>Bell</option>
                      <option>Bamboo</option>
                    </select>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="field px-2">
                <label class="label has-text-white has-text-weight-normal">
                  Intervals
                </label>
                <div class="control">
                  <div class="select">
                    <select id="intervals" name="intervals" ref={intervalRef}>
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
                class="button is-primary is-light has-text-blue is-rounded is-focused"
              >
                Add Habit
              </button>
            </li>
          </ul>
        </header>
      </section>
      <Routes>
        <Route path="/" element={<Home habitObj={habitObj} />} />
      </Routes>
    </>
  );
}

export default App;
