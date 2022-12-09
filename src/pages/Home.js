import { useState } from "react";
import "../../node_modules/bulma/css/bulma.css";

export default function Home({habitName, intervalVal}) {

  return (

    <>

      <section id="kanban-section" className="section">
        <div className="column column-container has-background-grey-light">
          <h2 className="exercise-list-title subtitle has-text-white has-background-grey-darker p-2">
            Exercise To Do
          </h2>
          <ul id="first-column">
            {habitName}
            {intervalVal}
          </ul>
        </div>
      </section>
    </>
  );
}
