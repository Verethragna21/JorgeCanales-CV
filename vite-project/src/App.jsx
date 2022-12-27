
import { RouterProvider} from "react-router-dom";
import './App.css'
import { RouterAuth } from "./Routes/Auth";

export const App = () => {
 

  return (
        <>
       
        <RouterProvider router={RouterAuth}/>
      
        </>
  )
}

export default App
