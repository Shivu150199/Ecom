import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./pages/Login"
import HomeLayout from "./pages/HomeLayout"
import ErrorElement from "./components/ErrorElement"
import Landing from "./pages/Landing"
import About from "./pages/About"
import Signup from "./pages/Signup"

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />
  },
  {
    path:'signup',
element:<Signup/>
  },
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorElement />,

    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />
      },
      {
        path: 'about',
        element: <About />
      },
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
