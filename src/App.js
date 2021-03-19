import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ListTask from './views/taches/ListTask';
import AddTask from './views/taches/AddTask';



function App() {
  return (
    <BrowserRouter>
        <Header/>

        <Switch>
          <Route exact path="/" component = {ListTask}/>
          
          <Route exact path="/ajouter" component = {AddTask}/>
          <Route exact path="/tache/:id"/>
          <Route exact path="/tache/:id/modifier"/>

          <Route exact path="/utilisateurs"/>

          
        </Switch>

        <Footer/>

    </BrowserRouter>
  );
}

export default App;
