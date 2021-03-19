import React,{Component} from "react";
import Task from "../../components/Task";
import TaskService from "../../services/taskService";

export default class ListTask extends Component{

    constructor(props){
        super(props);
        this.state = {
            tasks : []
        }
    }

    async componentDidMount(){
        let tasks = await TaskService.list();
        
        this.setState({tasks:tasks});
    }

    render(){
        return <div className="container">
                    <div className="row">
                        {this.state.tasks.map( item => {return <div className="col-md-4">
                        <Task task ={item}/>
                        </div>})}
                    </div>
                </div>
    }

}