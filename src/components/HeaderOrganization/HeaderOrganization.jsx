import { Link } from "react-router-dom"
import "./index.scss"

const HeaderOrganization = () => {
    return (
        <div className="header">
            <p className="org"> Organização </p>
            <p className="tar">
              <Link className="linkTarefas" to={`/`}> Tarefas </Link>
            </p>
            </div>
        );
};

export default HeaderOrganization