import axios from "axios";
import ListTask from "../views/taches/ListTask";

const baseUrl = "https://jsonplaceholder.typicode.com";

export default class TaskService{
    static async list(){
        let tasks = await axios.get(`${baseUrl}/todos`);

        return tasks.data;
    }

    static async create(data){
        await axios.post(`${baseUrl}/todos`,data)
    }

    static async details(id){
        return axios.get(`${baseUrl}/todos/${id}`);
    }

    static async update(id,data){
        return axios.put(`${baseUrl}/todos/${id}`,data);
    }

    static async delete(id){
        return axios.delete(`${baseUrl}/todos/${id}`);
    }
}
