import { ChakraBaseProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import './main.css'
import HomePage from './pages/HomePage'
import SoundboardPage from './pages/live/SoundboardPage'
import PageNotFound from './pages/PageNotFound'
import ProjectsPage from './pages/ProjectsPage'
import theme from './theme'

const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/projects', element: <ProjectsPage /> },
        { path: '/soundboard', element: <SoundboardPage /> },
        { path: '*', element: <PageNotFound /> }
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  </React.StrictMode>,
)


