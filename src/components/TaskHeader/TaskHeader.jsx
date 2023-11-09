import "./index.scss";

const TaskHeader = () => {
return (
    <ul className="List">
        <li className="List-header">
        <p className="pTarefa">Tarefa</p>
        </li>
        <li className="List-header">
        <p className="pStatus">Status</p>
        </li>
        <li className="List-header">
        <p className="pOpções">Opções</p>
        <div className="line"></div>

        </li>
    </ul>
    );
};

export default TaskHeader;