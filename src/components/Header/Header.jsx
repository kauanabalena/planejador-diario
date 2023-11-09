import { Link } from "react-router-dom"
import "./index.scss"

const Header = () => {
  return (
    <div className="header">
        <p className="organiza">
          <Link className="link" to={`/organization`}>Organização</Link>
          </p>
        <p className="tarefa">Tarefas</p>
        </div>
    );
};

export default Header