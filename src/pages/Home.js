import "../../node_modules/bulma/css/bulma.css";

export default function Home({ habitObj }) {
  let habitArr = []
  habitArr.push(habitObj)
  return (
    <>
      <section id="kanban-section" className="section">
        <div className="column column-container has-background-grey-light">
          <h2 className="exercise-list-title subtitle has-text-white has-background-grey-darker p-2">
            Exercise To Do
          </h2>
          <ul id="first-column">
            {habitArr.map((habits) => (
              <>
                <li key={habits.id}>
                  <h1>{habits.id}</h1>
                </li>
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
