import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { HomePage } from '../pages/HomePage'
import { ProjectAgendaVitalPage } from '../pages/ProjectAgendaVitalPage'
import { ProjectDelphiOnePage } from '../pages/ProjectDelphiOnePage'
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
    ],
  },
])
