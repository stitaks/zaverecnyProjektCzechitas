import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { fairytails } from './Constants';
import { Game } from './Components/Game';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
]
Object.keys(fairytails).map(
  (nameTails => routes.push({
    path: `/${nameTails}`,
    element: <Game key={nameTails} nameTails={nameTails} game={fairytails[nameTails]}/>
  }))
)
const router = createBrowserRouter(routes);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);