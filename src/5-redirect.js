import { Switch, Route, Link, Redirect } from 'react-router-dom'

const Portafolio = () => {
  const loggedIn = false
  if(!loggedIn) {
      return <Redirect push to="/" />
  }

  return (
    <h1> Portafolio </h1>
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
          <li>
            <Link to="/perfil"> perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Redirect from="/" to="/inicio" />
          <Route exact path="/inicio">
            <h1>Inicio</h1>
          </Route>
          <Route exact path="/perfil">
            <h1>Perfil</h1>
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
