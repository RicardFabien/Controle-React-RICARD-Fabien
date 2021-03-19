import React,{Component} from "react";
import {Link} from "react-router-dom"

export default class Header extends Component{

    render(){
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Liste taches</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/ajouter">Ajouter tache</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/utilisateurs">Liste utilisateurs</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    }

}