import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from "./views/signin/Login";
import Wall from "./views/wall/Wall";

const router = createBrowserRouter([
    { path: "/", element: <Login />, },
    { path: "/wall", element: <Wall />, }
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
