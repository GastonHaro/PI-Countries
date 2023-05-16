import { Landing, Home, Detail, Form } from './views'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './Components/NavBar/NavBar';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Route exact path='/' render={()=><Landing />}/>
      <Route exact path='/home' render={()=><Home />} />
      <Route exact path='/create' render={()=><Form />} />
      <Route exact path='/detail/:id' render={()=><Detail />} />
    </div>
  );
}

export default App;
