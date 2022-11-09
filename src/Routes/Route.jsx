import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Blogs from "../Pages/Blog/Blogs";
import DetailsService from "../Pages/DetailsService/DetailsService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AddReviews from "../Pages/Reviews/AddReviews";
import Reviews from "../Pages/Reviews/Reviews";
import AddServices from "../Pages/Services/AddServices";
import Services from "../Pages/Services/Services";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const route = createBrowserRouter([
    { 
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/home",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/services",
                element:<Services />
            },
            {
                path:"/services/:id",
                loader:({params})=> fetch(`http://localhost:4000/services/${params.id}`),
                element:<DetailsService />
            },
            {
                path:"/services/add",
                element: <AddServices />
            },
            {
                path:"/reviews",
                element: <Reviews />
            },
            {
                path:"/blog",
                element: <Blogs />
            },
            {
                path:"/reviews/add",
                element: <AddReviews />
            },
            {
                path:"/reviews/add/:id",
                loader:({params})=> fetch(`http://localhost:4000/services/${params.id}`),
                element:<AddReviews />
            },

        ]
    },
])

