import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { HomePage } from '../pages/HomePage'
import { ProjectAgendaVitalPage } from '../pages/ProjectAgendaVitalPage'
import { ProjectBncPage } from '../pages/ProjectBncPage'
import { ProjectDelphiOnePage } from '../pages/ProjectDelphiOnePage'
import { ProjectPortSalusPage } from '../pages/ProjectPortSalusPage'
import { ProjectRegalaloPage } from '../pages/ProjectRegalaloPage'
import { ProjectsPage } from '../pages/ProjectsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/delphi-one',
        element: <ProjectDelphiOnePage />,
      },
      {
        path: 'projects/agenda-vital',
        element: <ProjectAgendaVitalPage />,
      },
      {
        path: 'projects/bnc',
        element: <ProjectBncPage />,
      },
      {
        path: 'projects/regalalo',
        element: <ProjectRegalaloPage />,
      },
      {
        path: 'projects/port-salus',
        element: <ProjectPortSalusPage />,
      },
    ],
  },
])
