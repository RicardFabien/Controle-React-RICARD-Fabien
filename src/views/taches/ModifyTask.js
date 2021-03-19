import React,{Component} from "react";
import TaskService from "../../services/taskService";

export default class ModifyTask extends Component{

    constructor(props){
        super(props);
        this.state = {
            task:{},
            title : "Sans nom",
            completed : false
        }
    }



    handleChange(e){
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleChecking(e){
        this.setState({
            completed : e.target.checked
        });
    }

    handleSubmit(e){
        e.preventDefault();

        let {title,completed} = this.state;

        let data = {
            userId:1,
            title:title,
            completed:completed
        }

        
        this.props.history.push("/");

    }

    render(){
        return <div className="container">
                    <form onSubmit = {(e) => this.handleSubmit(e)}>
                        <div className = "form-group">
                            <label>Titre</label>
                            <input type="text" id = "title" required className="form-control" onChange = {(e)=>this.handleChange(e)}/>
                        </div>

                        <div className = "form-group">
                            <label>Fini</label>
                            <input type = "checkbox" id = "completed" onChange = {(e)=>this.handleChecking(e)} />
                        </div>

                        <input type="submit" value="Modifier"/>
                    </form>
                </div>
    }

}

