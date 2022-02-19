import { Switch, Route, Link, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio"> portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path="/">
            <h1>Inicio</h1>
          </Route>
          <Route path="/portafolio">
            <h1>Portafolio</h1>
          </Route>
        </Switch>
      </section>
    </div>
  );
}


export default App;
