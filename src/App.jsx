import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/layout/Layout'
import HomePage from './routes/home/HomePage'
import ListPage from "./routes/list/ListPage"
import Login from './routes/login/LoginPage'
import NewPostPage from './routes/newPost/newPost'
import ProfilePage from './routes/profile/Profile'
import Register from './routes/register/register'
import SinglePage from './routes/single/SinglePage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
