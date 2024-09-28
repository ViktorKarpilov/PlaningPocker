import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage/>,
  }
]);

export default router;
