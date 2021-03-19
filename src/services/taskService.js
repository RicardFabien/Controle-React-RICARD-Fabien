import axios from "axios";
import ListTask from "../views/taches/ListTask";

const baseUrl = "https://jsonplaceholder.typicode.com";

export default class TaskService{
    static async list(){
        let tasks = await axios.get(`${baseUrl}/todos`);

        return tasks.data;
    }
}
