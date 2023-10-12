import ReactDOM  from "react-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/LandingPage/Header/NavBar/NavBar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Provider } from "react-redux";
import reduxStore from "./components/utils/ReduxStore/reduxStore";
import CartPage from "./components/CartPage/CartPage";

const AppLayout=()=>{
    return(
        <Provider store={reduxStore}>
            <div>
                <NavBar/>
                <Outlet/>
            </div>
        </Provider>
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
            {
                path:"/cart",
                element:<CartPage/>
            }
        ],
        errorElement:<ErrorPage/>
    }
]);


const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter}/>);