import UserInput from "./components/UserInput/UserInput";
import HomePage from "./components/Layout";
import SignUp from "./components/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CMSMember from "./CMSMember";
import Recipes from "./components/Recipes";
import AppUser from "./AppUser";
function App(props) {
  const router = createBrowserRouter([
    {path:'', element: <UserInput/>},
    {path:'/HomePage', element: <HomePage/>},
    {path:'/SignUP', element: <SignUp/>},
    {path:'/Home', element: <Home/>},
    {path:'/Recipes', element: <Recipes/>},
    {path:'/CMSMember', element: <CMSMember/>},
    {path:'/AppUser', element: <AppUser/>},
     ]);

     
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
