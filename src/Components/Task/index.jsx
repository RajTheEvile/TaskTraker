import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

import './index.css'

const Task = ({ data, onComplete, onDelete }) => {
    const { id, text, completed } = data;

    return (
        <li className="taskelement">
            <div className="taskh">
            <button className="status" type="button" onClick={() => onComplete(id)}>
                {completed ? <TiTick color="green" /> :<RxCross2 color="red"/> }
            </button>
            <p className="task" style={{ textDecoration: completed ? "line-through" : "none" }}>{text}</p>
            </div>
            <button className="deletebtn" type="button" onClick={() => onDelete(id)}>{<MdDelete color="grey"/>}</button>
        </li>
    );
};

export default Task;
