import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import SocialAccounts from './components/SocialAccounts/SocialAccounts';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Register></Register>
        },
        {
          path: 'socialMedia',
          element: <SocialAccounts></SocialAccounts>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
