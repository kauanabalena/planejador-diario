import { useState } from 'react';
import './index.scss';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import checkboxIcon from '../../assets/checkbox.svg';
import checkIcon from '../../assets/check.svg';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
import CustomModal from '../../components/Modal/Modal';
import Principal from '../../components/Principal/Principal';
import Header from '../../components/Header/Header';
import plusIcon from '../../assets/add.svg';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { taskName: 'Limpar a casa', taskStatus: false },
    { taskName: 'Responder E-mails', taskStatus: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deletingTask, setDeletingTask] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTaskName, setSelectedTaskName] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [
        ...tasks,
        { taskName: newTask, taskStatus: false },
      ];
      setTasks(updatedTasks);
      setNewTask('');
      setShowAddModal(false); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const handleTaskStatusChange = (index) => {
    const updatedTasks = [...tasks];
    if (updatedTasks[index]) {
      updatedTasks[index].taskStatus = !updatedTasks[index].taskStatus;
      setTasks(updatedTasks);
    }
  };

  const handleEditTask = (index) => {
    setEditingTask(index);
    setSelectedTaskName(tasks[index]?.taskName);
    setConfirmEdit(true);
  };

  const handleConfirmEdit = () => {
    setConfirmEdit(false);
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setConfirmEdit(false);
    setEditingTask(null);
    setEditedTaskName('');
    setSelectedTaskName('');
  };

  const handleSaveEdit = () => {
    const updatedTasks = [...tasks];
    if (editingTask !== null && updatedTasks[editingTask]) {
      updatedTasks[editingTask].taskName = editedTaskName;
      setEditedTaskName('');
      setTasks(updatedTasks);
    }
    setEditingTask(null);
    setShowEditModal(false);
  };

  const handleDeleteTask = (index) => {
    setDeletingTask(index);
    setSelectedTaskName(tasks[index]?.taskName);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    const updatedTasks = tasks.filter((_, index) => index !== deletingTask);
    setTasks(updatedTasks);
    setConfirmDelete(false);
    setDeletingTask(null);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setDeletingTask(null);
    setSelectedTaskName('');
  };

  const handleAddTaskModal = () => {
    setShowAddModal(true);
  };

  const handleCancelAddTask = () => {
    setShowAddModal(false);
  };

  return (
    <>
      <Header />
      <Principal />
      <TaskHeader />
      <div className="container">
        <ul className="list-items">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-content">
                <span className="task-name">{task.taskName}</span>
                <img
                  src={task.taskStatus ? checkIcon : checkboxIcon}
                  alt="Checkbox"
                  onClick={() => handleTaskStatusChange(index)}
                  className="checkbox-icon"
                />
              </div>
              <div className="task-buttons">
                <img
                  src={editIcon}
                  alt="Editar"
                  className="icon edit-icon"
                  onClick={() => handleEditTask(index)}
                />
                <img
                  src={deleteIcon}
                  alt="Excluir"
                  className="icon delete-icon"
                  onClick={() => handleDeleteTask(index)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="add-task-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress} 
            placeholder="Nova Tarefa..."
            className="new-task-input task-input"
          />
          <img
            src={plusIcon}
            alt="Adicionar"
            className="icon add-icon"
            onClick={handleAddTaskModal}
          />
        </div>
      </div>
      <CustomModal isOpen={confirmEdit} onClose={handleCancelEdit}>
        <h2>Deseja editar esse item?</h2>
        <p>{selectedTaskName}</p>
        <button className="firstButton" onClick={handleCancelEdit}>
          Não
        </button>
        <button className="secondButton" onClick={handleConfirmEdit}>
          Sim
        </button>
      </CustomModal>
      {showEditModal && (
        <CustomModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
        >
          <h2>Editar Tarefa</h2>
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
            className="edit-task-input"
          />
          <button className="firstButton" onClick={handleSaveEdit}>
            Salvar
          </button>
          <button
            className="secondButton"
            onClick={() => setShowEditModal(false)}
          >
            Cancelar
          </button>
        </CustomModal>
      )}
      <CustomModal isOpen={confirmDelete} onClose={handleCancelDelete}>
        <h2>Deseja excluir esse item?</h2>
        <p>{selectedTaskName}</p>
        <button className="firstButton" onClick={handleCancelDelete}>
          Não
        </button>
        <button className="secondButton" onClick={handleConfirmDelete}>
          Sim
        </button>
      </CustomModal>
      {showAddModal && (
        <CustomModal isOpen={showAddModal} onClose={handleCancelAddTask}>
          <h2>Adicionar Tarefa</h2>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="add-task-input"
          />
          <button className="firstButton" onClick={addTask}>
            Adicionar
          </button>
          <button className="secondButton" onClick={handleCancelAddTask}>
            Cancelar
          </button>
        </CustomModal>
      )}
    </>
  );
};

export default Tasks;
