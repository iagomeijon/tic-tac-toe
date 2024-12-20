//MARK: LIBS
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

//MARK: PAGES
import Home from "../pages/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  function AppRoutes() {
    return (<RouterProvider router={router} />);
  }

  export default AppRoutes;