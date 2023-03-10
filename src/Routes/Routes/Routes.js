import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Authentication/Login";
import Register from "../../Components/Authentication/Register";
import Cart from "../../Components/Cart/Cart";
import AddCustomer from "../../Components/Dashboard/AddCustomer";
import AddProduct from "../../Components/Dashboard/AddProduct";
import AllCustomer from "../../Components/Dashboard/AllCustomer";
import AllProducts from "../../Components/Dashboard/AllProducts";
import MyProfile from "../../Components/Dashboard/MyProfile";
import { Home } from "../../Components/Home/Home";
import Dashboard from "../../layouts/Dashboard";
import Main from "../../layouts/Main";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },{
                path:"/Cart",
                element:<Cart></Cart>
            }
        ]
    },{
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard/",
                element:<MyProfile></MyProfile>
            },{
                path:"/dashboard/all-customer",
                element:<AllCustomer></AllCustomer>
            },
            {
                path:"/dashboard/all-products",
                element:<AllProducts></AllProducts>
            },{
                path:"/dashboard/add-a-product",
                element:<AddProduct></AddProduct>
            },{
                path:"/dashboard/add-a-customer",
                element:<AddCustomer></AddCustomer>
            }
        ]
    }
])