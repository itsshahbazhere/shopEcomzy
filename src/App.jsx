import { createHashRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: '/cart',
      element: (
        <div>
          <Navbar />
          <Cart />
        </div>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
