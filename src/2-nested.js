import { Switch, Route, Link, Routes } from 'react-router-dom'

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={'/portafolio/proyecto-1'}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={'/portafolio/proyecto-2'}>Proyecto 2</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path={'/portafolio/proyecto-1'}>
            <h2>Proyecto 1</h2>
          </Route>
          <Route path={'/portafolio/proyecto-2'}>
            <h2>Proyecto 2</h2>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

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
            <Portafolio />
          </Route>
        </Switch>
      </section>
    </div>
  );
}


export default App;
