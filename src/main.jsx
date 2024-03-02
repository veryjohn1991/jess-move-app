import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Query from './pages/Query';



// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      {
        path: 'query',
        element: <Query />,
      },
      
      
      
      
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
