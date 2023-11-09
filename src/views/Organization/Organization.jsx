import HeaderOrganization from "../../components/HeaderOrganization/HeaderOrganization"
import './index.scss';

const Organization = () => {
  return (
    <div>
      <HeaderOrganization/>
      <h2 >Bem-vindo ao seu Planejador Diário!</h2>
      <p className="organizationP">
        Esta é uma ferramenta simples e eficiente para ajudá-lo a organizar suas tarefas diárias.</p>
        <p className="p2"> * Adicione novas tarefas ao seu planejador diário.<br></br>
          * Edite as tarefas existentes para atualizar informações.<br></br>
          * Marque as tarefas como concluídas.<br></br>
          * Exclua tarefas que não são mais necessárias.</p>
    </div>
  );
};

export default Organization