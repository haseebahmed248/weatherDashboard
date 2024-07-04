import React from 'react'
import {useRoutes} from 'react-router-dom'
import HomeDesktopPage from './pages/HomeDesktop';

const ProjectRoutes = ()=>{
    let routes = useRoutes([
        {path:'/',
            element: <HomeDesktopPage />}
    ]);
    return routes;
}
export default ProjectRoutes;