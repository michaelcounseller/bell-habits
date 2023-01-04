import "../../node_modules/bulma/css/bulma.css";

export default function Home({ habitArr }) {

  return (
    <>
      <section id="kanban-section" className="section">
        <div className="column column-container has-background-grey-light">
          <h2 className="exercise-list-title subtitle has-text-white has-background-grey-darker p-2">
            Exercise To Do
          </h2>
          <ul id="first-column">
            {habitArr.map((habits) => (
              <div key={habits.id}>
               
                <li >
                  <h1>{habits.id}</h1>
                  <h1>{habits.name}</h1>
                  <h1>{habits.interval}</h1>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
