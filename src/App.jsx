import ReactDOM  from "react-dom/client";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/LandingPage/Header/NavBar/NavBar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const AppLayout=()=>{
    return(
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<LandingPage/>
            },
        ],
        errorElement:<Error/>
    }
]);


const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter}/>);