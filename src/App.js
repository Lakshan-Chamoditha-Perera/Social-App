import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Signup from "./views/signup/Signup";
import Login from "./views/signin/Login";
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import Wall from "./views/wall/Wall";

const router = createBrowserRouter([
    { path: "/register", element: <Signup />, },
    { path: "/login", element: <Login />, },
    { path: "/", element: <Wall />, }
]);

function App()
{
    return (
        <Provider store={store}>
            <div className={'app'}>
                <ToastContainer />
                <RouterProvider router={router} />
            </div>
        </Provider>
    );
}

export default App;
