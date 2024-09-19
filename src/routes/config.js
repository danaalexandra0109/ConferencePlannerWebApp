import React from 'react'
import { Navigate } from 'react-router-dom'
import CustomRoute from 'components/routing/CustomRoute'
import About from 'features/about/About'
import { Forbidden, NotFound } from '@totalsoft/rocket-ui'
import Welcome from 'features/welcome/Welcome'
import ConferenceListContainer from 'features/conference/list/components/ConferenceListContainer'
import ConferenceContainer from 'features/conference/edit/components/ConferenceContainer'
import ConferenceInfoContainer from 'features/conference/info/components/ConferenceInfoContainer'
import Notes from 'features/notes/Notes'

const routes = [
  { path: '/', element: <Navigate replace to='/welcome' /> },
  { path: '/conferences', element: <ConferenceListContainer /> },
  { path: '/conferences/:id', element: <ConferenceContainer /> },
  { path: '/welcome', element: <CustomRoute isPrivate={false} component={Welcome} /> },
  { path: '/forbidden', element: <Forbidden /> },
  { path: '*', element: <NotFound title='PageNotFound' /> },
  { path: '/conferences/view/:id', element: <ConferenceInfoContainer /> },
  { path: 'notes', element: <Notes /> },
  { path: 'about', element: <About /> }
]

export const notLoggedInRoutes = [
  { path: '/welcome', element: <CustomRoute isPrivate={false} component={Welcome} /> },
  { path: '*', element: <Navigate replace to='/welcome' /> }
]

export default routes
