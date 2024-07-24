import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Signup from "./views/signup/Signup";
import Login from "./views/signin/Login";

const router = createBrowserRouter([{path: "/register", element: <Signup/>,}, {path: "/login", element: <Login/>,}]);

function App() {
    return (<div className={'app'}>
        <ToastContainer/>
        <RouterProvider router={router}/>
    </div>);
}

export default App;
