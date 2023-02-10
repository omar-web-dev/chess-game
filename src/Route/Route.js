import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ChessBoard from "../Pages/StaticPages/ChessBoard";
import Home from "../Pages/StaticPages/Home";

const route = createBrowserRouter([{
    path : '/',
    element : <Main></Main>,
    children : [{
        path: "/",
        element: <Home />,
    },
    {
        path: "/chess-board",
        element: <ChessBoard />,
    }
]
}])

export default route