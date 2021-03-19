import React,{Component} from "react";
import TaskService from "../../services/taskService";

export default class AddTask extends Component{

    constructor(props){
        super(props);
        this.state = {
            title : "Sans nom"
        }
    }


    render(){
        return <div className="container">
                    ajouter tache
                </div>
    }

}