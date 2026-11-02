import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { ProjectAgendaVitalPage } from '../pages/ProjectAgendaVitalPage'
import { ProjectBncPage } from '../pages/ProjectBncPage'
import { ProjectDelphiOnePage } from '../pages/ProjectDelphiOnePage'
import { ProjectHabitDrivenPage } from '../pages/ProjectHabitDrivenPage'
import { ProjectMazalosaPage } from '../pages/ProjectMazalosaPage'
import { ProjectPasimediaPage } from '../pages/ProjectPasimediaPage'
import { ProjectPortSalusPage } from '../pages/ProjectPortSalusPage'
import { ProjectRegalaloPage } from '../pages/ProjectRegalaloPage'
import { ProjectModulUniversityPage } from '../pages/ProjectModulUniversityPage'
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
        path: 'contact',
        element: <ContactPage />,
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
        path: 'projects/modul-university',
        element: <ProjectModulUniversityPage />,
      },
      {
        path: 'projects/habit-driven',
        element: <ProjectHabitDrivenPage />,
      },
      {
        path: 'projects/port-salus',
        element: <ProjectPortSalusPage />,
      },
      {
        path: 'projects/mazalosa',
        element: <ProjectMazalosaPage />,
      },
      {
        path: 'projects/pasimedia',
        element: <ProjectPasimediaPage />,
      },
    ],
  },
])
