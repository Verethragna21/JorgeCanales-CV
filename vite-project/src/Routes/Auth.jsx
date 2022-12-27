import {
    createBrowserRouter
  } from "react-router-dom";
import { AboutMe } from "../components/body/AboutMe";
import { ContactMe } from "../components/body/ContactMe";
import { Experience } from "../components/body/Experience";
import { Skills } from "../components/body/Skills";
import { Dashboard } from "../components/Dashboard";




export const RouterAuth = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children: [
        {
            path: "/AboutMe",
            element: < AboutMe/>,
          },{
            path: "/Experience",
            element: <Experience/>,
          },{
            path: "/Skills",
            element: <Skills/>,
          },{
            path: "/ContactMe",
            element: <ContactMe/>,
          }
      ],
    },
  ]);
