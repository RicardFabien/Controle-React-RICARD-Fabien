import React,{Component} from "react";
import TaskService from "../../services/taskService";

export default class ModifyTask extends Component{

    constructor(props){
        super(props);
        this.state = {
            task:{},
        }
    }

    

    render(){
        return <div className="container">
                    

                    <Link to={`/tache/${task.id}/modifier`} className="btn btn-warning">Modifier</Link>
                </div>
    }

}