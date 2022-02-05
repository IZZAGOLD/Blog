import Posts from "../Components/Posts/Posts";
import Login from "../Components/Login/Login";
import PostId from "../Components/PostId/PostId";
import Error from "../Components/Error/Error";


export const privateRoutes = [
    {path: '/posts/', element: <Posts/>},
    {path: '/posts/:id', element: <PostId/>},
    {path: '/error', element: <Error/>},

]
export const publicRoutes = [
    {path: '/login', element: <Login/>}

]
