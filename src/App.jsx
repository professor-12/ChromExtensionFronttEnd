import './App.css'
import LandingPage from './components/LandingPAge/page';
import Login from './pages/LoginPage/page';
import { loader as HomeLoader } from './pages/Home/page';
import Home from './pages/Home/page';
import { createBrowserRouter ,RouterProvider} from "react-router-dom"
import Root from './UI/root';
import ErrorElement from './components/Error/page';



function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Root />,
      errorElement: <ErrorElement/> ,
      children: [
        { index : true, element: <LandingPage /> }, 
        { path: 'login', element: <Login /> },
        { path:'/home' , element: <Home/>,loader:HomeLoader}
      ]}
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App
