import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "../Task";
import { IoAddCircleOutline } from "react-icons/io5";

import './index.css'

class Home extends Component {
    state = {
        tasks: [],
        task: "",
    };

    addTask = () => {
        const { task, tasks } = this.state;
        if (task.trim() === "") return; // Prevent empty task addition

        const newTask = {
            id: uuidv4(),
            text: task,
            completed: false,
        };

        this.setState({ tasks: [...tasks, newTask], task: "" });
    };

    taskInput = (event) => {
        this.setState({ task: event.target.value });
    };

    onComplete = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    deleteTask = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.id !== id),
        }));
    };

    render() {
        const { tasks, task } = this.state;
        return (
            <div className="home">
                <div className="task-card">
                    <h1>Task Tracker</h1>
                    <div className="inputfeild">
                        <input 
                            type="text" 
                            className="input" 
                            id="input" 
                            value={task} 
                            onChange={this.taskInput}
                        />
                        <button className="addbtn" type="button" onClick={this.addTask}>
                            <IoAddCircleOutline /> Add Task
                        </button>
                    </div>
                    <ul className="tasks">
                        {tasks.map((each) => (
                            <Task 
                                data={each} 
                                key={each.id} 
                                onComplete={this.onComplete} 
                                onDelete={this.deleteTask} 
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
