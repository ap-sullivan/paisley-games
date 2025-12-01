
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import News from './pages/News';
import LocalInfo from './pages/LocalInfo';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/events", element: <Events /> },
  { path: "/contact", element: <Contact /> },
  { path: "/news", element: <News /> },
  { path: "/local", element: <LocalInfo /> },
  { path: "/dashboard", element: <Dashboard /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
