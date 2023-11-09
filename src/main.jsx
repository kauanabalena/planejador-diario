import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tarefas from "./views/Tasks/Tasks"
import Organization from "./views/Organization/Organization"

const tasks = [
  { taskName: 'Limpar a casa ', status: 'Em andamento', options: 'Opções 1' },
  { taskName: 'Responder e-mails', status: 'Pendente', options: 'Opções 2' },

];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tarefas tasks={tasks}/>,
  },
  {
    path: "/organization",
    element: <Organization/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
