
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Error from "./Components/Error";
import Hscp2 from "./Components/Hscp2";
import CVMS from "./Components/CVMS"; 
import MainContainer from "./Components/MainContainer";
import Body from "./Components/Body";
import TorreyHills from "./Components/TorreyHills";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    error: <Error />,
    children:[
      {
      path: "/cvms",
      element: <CVMS />,
      error: <Error />,
    },
    {
      path: "/hscp2",
      element: <Hscp2 />,
      error: <Error />,
    },
    {
      path: "/torreyhills",
      element: <TorreyHills />,
      error: <Error />,
    },
  ]
    

  },
  
  
]);

function App() {
  return (
    <div className="App">
    
    <RouterProvider router={appRouter}/>

    </div>
  );
}

export default App;


/*
children: [
      
    {
      Path:"hscp2",
      element : <Hscp2/>,
      errorElement: <Error/>,
    },
    {
        Path:"cvms",
        element : <CVMS/>,
        errorElement: <Error/>,
    },
  ],
*/
