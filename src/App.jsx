import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const WorkDetailsPage = lazy(()=> import('./pages/WorkDetailsPage'))
const Contact = lazy(()=> import('./pages/Contact'))


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Suspense fallback={<p>Chargement...</p>}><Home /></Suspense> },
      { path: "/about", element: <Suspense fallback={<p>Chargement...</p>}><About /></Suspense> },
      { path: "/work", element: <Suspense fallback={<p>Chargement...</p>}><Work /></Suspense> },
      {path:"/work/:id", element:<Suspense><WorkDetailsPage/></Suspense>},
      { path: "/contact", element: <Suspense fallback={<p>Chargement...</p>}><Contact /></Suspense> },

    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
